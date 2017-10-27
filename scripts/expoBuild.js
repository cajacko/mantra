/* eslint no-console: 0 max-lines: 0 */
import download from 'download-file';
import runCommand from 'scripts/helpers/runCommand';

require('dotenv').config('../.env');

let ios = false;
let android = false;

process.argv.forEach((arg) => {
  if (arg.includes('ios')) {
    ios = true;
  } else if (arg.includes('android')) {
    android = true;
  }
});

const directory = './tmp/';
const filename = ios ? 'build.ipa' : 'build.apk';
const buildpath = `${directory}${filename}`;

/**
 * Run the expo build process, for creating a .ipa or .apk file
 *
 * @return {Promise} Promise that resolves when the command exits successfully
 */
function build() {
  return new Promise((resolve, reject) => {
    const command = ios ? 'yarn run build:ios' : 'yarn run build:android';

    runCommand(command, (output) => {
      if (output.includes("What's your Apple ID")) {
        reject(
          'No apple credentials, run "npm run build:ios" to enter credentials'
        );
      }
    })
      .then(resolve)
      .catch(reject);
  });
}

/**
 * Check the expo build status
 *
 * @return {Promise} Promise that resolves with the build URL if complete, or
 * resolves empty if pending
 */
function checkStatus() {
  return new Promise((resolve, reject) => {
    runCommand('yarn run build:status', (output) => {
      const matches = output.match(/\bhttps?:\/\/\S+/gi);
      const buildUrl = matches && matches[0] ? matches[0] : null;

      if (buildUrl) {
        resolve(buildUrl);
      } else if (output.includes('Build in progress')) {
        resolve();
      }
    })
      .then(() => reject('Unexpected response, check it and add to build'))
      .catch(reject);
  });
}

/**
 * Keep checking the build status, until it is resolved
 *
 * @param  {?Number} index Number of times we've checked
 * @return {Promise}       Promise that resolves when the build URL is given
 */
function waitForStatus(index) {
  const i = index || 0;

  return new Promise((resolve, reject) => {
    if (i > 100) {
      reject();
      return;
    }

    checkStatus()
      .then((url) => {
        if (!url) {
          setTimeout(() => {
            waitForStatus(i + 1)
              .then(resolve)
              .catch(reject);
          }, 5000);

          return;
        }

        resolve(url);
      })
      .catch(reject);
  });
}

/**
 * Given a build url, download the file
 *
 * @param  {String} url Url to download
 * @return {Promise}     Promise that resolves when the build has downloaded
 */
function downloadBuild(url) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading build: ${url}`);

    download(url, { directory, filename }, (err) => {
      if (err) reject(err);
      console.log(`Build downloaded at: ${buildpath}`);
      resolve(buildpath);
    });
  });
}

/**
 * Upload a .ipa file to iTunes connect, via fastlane
 *
 * @param  {String} filepath Path to the .ipa file to upload
 * @return {Promise}          Promise that resolves when the build has uploaded
 * and processed
 */
function uploadBuild(filepath) {
  return new Promise((resolve, reject) => {
    const command = `fastlane pilot upload -u ${process.env
      .APPLE_ID} -q ${process.env.FASTLANE_TEAM_ID} -i ${filepath}`;

    runCommand(command)
      .then(resolve)
      .catch(reject);
  });
}

// Check whether to run io or android build
if (ios && !android) {
  build()
    .then(waitForStatus)
    .then(downloadBuild)
    .then(uploadBuild)
    .then(() => console.log('SUCCESS'))
    .catch((err) => {
      // Set timeout is needed as a trick to stop the promise, turning the
      // exception into a reject()
      setTimeout(() => {
        throw new Error(err || 'Undefined application error');
      });
    });
} else if (android && !ios) {
  build()
    .then(waitForStatus)
    .then(downloadBuild)
    .then(() => console.log('SUCCESS'))
    .catch((err) => {
      // Set timeout is needed as a trick to stop the promise, turning the
      // exception into a reject()
      setTimeout(() => {
        throw new Error(err || 'Undefined application error');
      });
    });
} else if (!ios && !android) {
  throw new Error('No android or ios tag was specified in the build script');
} else {
  throw new Error(
    'Both android and ios tags were found, please check the build script'
  );
}
