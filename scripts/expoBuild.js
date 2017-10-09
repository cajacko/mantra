/* eslint no-console: 0 */
import download from 'download-file';
import runCommand from 'run-command-promise';

require('dotenv').config('../.env');

const directory = './tmp/';
const filename = 'build.ipa';
const buildpath = `${directory}${filename}`;

function build() {
  return new Promise((resolve, reject) => {
    runCommand('npm run build:ios', (output) => {
      if (output.includes("What's your Apple ID")) {
        reject(
          'No apple credentials, run "npm run build:ios" to enter credentials',
        );
      }
    })
      .then(resolve)
      .catch(reject);
  });
}

function checkStatus() {
  return new Promise((resolve, reject) => {
    runCommand('npm run build:status', (output) => {
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

function downloadBuild(url) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading build: ${url}`);

    download(url, { directory, filename }, (err) => {
      if (err) reject(err);
      console.log(`Build downloaded at: ${buildpath}`);
      resolve(buildpath);
    });

    resolve();
  });
}

function uploadBuild(filepath) {
  return new Promise((resolve, reject) => {
    const command = `fastlane pilot upload -u ${process.env
      .APPLE_ID} -q ${process.env.FASTLANE_TEAM_ID} -i ${filepath}`;

    runCommand(command)
      .then(resolve)
      .catch(reject);
  });
}

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
