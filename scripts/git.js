import inquirer from 'inquirer';
import { run } from 'scripts/helpers/checklist';
import {
  finishFeature,
  getFeatures,
  checkoutDevelop,
  createReleaseBranch,
} from 'scripts/helpers/git';
import createFeatureBranch from 'scripts/helpers/createBranchFromTrello';
import { getNewVersion } from 'scripts/helpers/version';

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

  return inquirer
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
    .then(runChecklist)
    .then(({ feature, shouldDelete }) => finishFeature(feature, shouldDelete));
}

function chooseReleaseType() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        choices: ['Patch', 'Minor', 'Major'],
        message: 'Which feature do you want to finish?',
      },
    ])
    .then(({ type }) =>
      checkoutDevelop().then(() => {
        const version = getNewVersion(type.toLowerCase());
        return createReleaseBranch(version);
      }),
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

        case 'New Feature':
          return createFeatureBranch();

        case 'New Release':
          return chooseReleaseType();

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
