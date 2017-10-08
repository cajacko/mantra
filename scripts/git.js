import inquirer from 'inquirer';
import { run } from 'scripts/helpers/checklist';
import { finishFeature, getFeatures } from 'scripts/helpers/git';
// import runCommand from 'scripts/helpers/runCommand';

function runCommand(command) {
  return new Promise((resolve) => {
    console.log(command);
    resolve();
  });
}

function runChecklist(passThrough) {
  return new Promise((resolve, reject) => {
    run()
      .then(() => resolve(passThrough))
      .catch(reject);
  });
}

function chooseFeature() {
  const features = getFeatures();

  if (features.length < 1) {
    throw new Error('No features');
  }

  return (
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'feature',
          choices: features,
          message: 'Which feature do you want to finish?',
        },
        {
          type: 'confirm',
          name: 'shouldDelete',
          message: 'Do you want to delete the branch afterwards?',
        },
      ])
      // .then(runChecklist)
      .then(({ feature, shouldDelete }) => finishFeature(feature, shouldDelete))
  );
}

function init() {
  const actions = [
    'New Feature',
    'Finish Feature',
    'New Release',
    'Finish Release',
  ];

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        choices: actions,
        message: 'What do you want to do?',
      },
    ])
    .then(({ action }) => {
      switch (action) {
        case 'Finish Feature':
          return chooseFeature();

        default:
          throw new Error('Unexpected action given');
      }
    })
    .catch(e =>
      setTimeout(() => {
        throw new Error(e || 'Undefined error');
      }),
    );
}

init();
