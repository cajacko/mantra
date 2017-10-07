import { readJsonSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';
import inquirer from 'inquirer';

const checklistFile = join(__dirname, '../checklist.json');

function getChecklist() {
  return readJsonSync(checklistFile);
}

function setChecklist(json) {
  return writeJsonSync(checklistFile, json, { spaces: 2 });
}

function addToChecklist(item) {
  const checklist = getChecklist();
  checklist.checklist.push(item);
  setChecklist(checklist);
}

function reorder(callback) {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'reorder',
        message: 'Reordering?',
      },
    ])
    .then(() => callback());
}

function add(callback) {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Add a title for the question?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Add additional information',
      },
      {
        type: 'confirm',
        name: 'reorder',
        message: 'Would you like to reorder the checklist items?',
      },
    ])
    .then((answers) => {
      const item = { title: answers.title };

      if (answers.description && answers.description.length) {
        item.description = answers.description;
      }

      addToChecklist(item);

      if (answers.reorder) {
        return reorder(callback);
      }

      return callback();
    });
}

function init() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        choices: ['Run', 'Add', 'Remove', 'Edit', 'Reorder'],
        message: 'What do you want to do?',
      },
    ])
    .then(({ action }) => {
      switch (action) {
        case 'Add': {
          return add(init);
        }

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
