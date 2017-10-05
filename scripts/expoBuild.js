import { execSync } from 'child_process';

function build() {
  const output = execSync('npm run build:ios', { encoding: 'utf8' });

  if (output.includes("What's your Apple ID")) {
    throw new Error(
      'No apple credentials, run "npm run build:ios" to enter credentials',
    );
  }
}

function checkStatus() {
  return new Promise((resolve, reject) => {
    // stream so is nicer output
    const output = execSync('npm run build:status', { encoding: 'utf8' });
    // console.log(output);

    const matches = output.match(/\bhttps?:\/\/\S+/gi);
    const buildUrl = matches && matches[0] ? matches[0] : null;

    if (buildUrl) {
      resolve(buildUrl);
    } else if (output.includes('in progess?!?!?!?')) {
      resolve();
    } else {
      reject();
    }
  });
}

function waitForStatus(i) {
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

// build();
waitForStatus(0)
  .then(console.log)
  .catch(() => console.log('ERROR oh no'));
