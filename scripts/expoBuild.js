/* eslint no-console: 0 */
import { execSync } from 'child_process';
import download from 'download-file';

function build() {
  return new Promise((resolve, reject) => {
    resolve();

    // const output = execSync('npm run build:ios', { encoding: 'utf8' });
    //
    // if (output.includes("What's your Apple ID")) {
    //   reject(
    //     'No apple credentials, run "npm run build:ios" to enter credentials',
    //   );
    //   return;
    // }
    //
    // resolve();
  });
}

function checkStatus() {
  return new Promise((resolve, reject) => {
    // stream so is nicer output
    const output = execSync('npm run build:status', { encoding: 'utf8' });
    console.log(output);

    const matches = output.match(/\bhttps?:\/\/\S+/gi);
    const buildUrl = matches && matches[0] ? matches[0] : null;

    if (buildUrl) {
      resolve(buildUrl);
    } else if (output.includes('Build in progress')) {
      resolve();
    } else {
      reject();
    }
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
    const directory = './tmp/';
    const filename = 'build.ipa';

    console.log(`Downloading build: ${url}`);

    download(url, { directory, filename }, (err) => {
      if (err) reject(err);
      const filepath = `${directory}${filename}`;
      console.log(`Build downloaded at: ${filepath}`);
      resolve(filepath);
    });

    resolve();
  });
}

build()
  .then(waitForStatus)
  .then(downloadBuild)
  .then(console.log)
  .catch((err) => {
    throw new Error(err || 'Undefined application error');
  });
