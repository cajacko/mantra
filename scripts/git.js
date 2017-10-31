import inquirer from 'inquirer';
import { run } from 'cj-checklist';
import {
  checkoutDevelop,
  createReleaseBranch,
  finishBranch,
  getBranches,
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

function checkHasRunTests() {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'tested',
        default: false,
        message: 'Have you ran and passed "npm test" or "yarn test"?',
      },
    ])
    .then(({ tested }) => {
      if (!tested) {
        throw new Error('Have not tested. Run "npm test" or "yarn test"');
      }
    });
}

function chooseBranch(type, askToDelete) {
  const branches = getBranches(type);

  if (branches.length < 1) {
    throw new Error(`No ${type}s`);
  }

  const questions = [
    {
      type: 'list',
      name: 'branch',
      choices: branches,
      message: `Which ${type} do you want to finish?`,
    },
  ];

  if (askToDelete) {
    questions.push({
      type: 'confirm',
      name: 'shouldDelete',
      message: 'Do you want to delete the branch afterwards?',
    });
  }

  if (type === 'release') {
    questions.push({
      type: 'confirm',
      name: 'shouldPush',
      message:
        'Do you want to push the develop/master branches and release tag afterwards?',
    });
  }

  return checkHasRunTests().then(() =>
    inquirer
      .prompt(questions)
      .then(runChecklist)
      .then(({ branch, shouldDelete, shouldPush }) =>
        finishBranch(branch, type, shouldDelete, shouldPush)
      )
  );
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
      })
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
          return chooseBranch('feature', true);

        case 'New Feature':
          return createFeatureBranch();

        case 'New Release':
          return chooseReleaseType();

        case 'Finish Release':
          return chooseBranch('release', true);

        default:
          throw new Error('Unexpected action given');
      }
    })
    .catch(e =>
      setTimeout(() => {
        throw new Error(e || 'Undefined error');
      })
    );
}

init();
