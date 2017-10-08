import inquirer from 'inquirer';
import { run } from 'scripts/helpers/checklist';
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

function chooseBranch(type, askToDelete) {
  const branches = getBranches();

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

  return inquirer
    .prompt(questions)
    .then(runChecklist)
    .then(({ branch, shouldDelete }) =>
      finishBranch(branch, type, shouldDelete),
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
          return chooseBranch('feature', true);

        case 'New Feature':
          return createFeatureBranch();

        case 'New Release':
          return chooseReleaseType();

        case 'Finish Release':
          return chooseBranch('release', false);

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
