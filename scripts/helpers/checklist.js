import { readJsonSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';
import inquirer from 'inquirer';

const checklistFile = join(__dirname, '../../checklist.json');

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

function removeFromChecklist(title) {
  const checklist = getChecklist();
  const items = [];

  checklist.checklist.forEach((item, i) => {
    if (item.title === title) {
      return;
    }

    items.push(item);
  });

  checklist.checklist = items;

  setChecklist(checklist);
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
    ])
    .then((answers) => {
      const item = { title: answers.title };

      if (answers.description && answers.description.length) {
        item.description = answers.description;
      }

      addToChecklist(item);
      return callback();
    });
}

/**
 * Run the checklist, asking all the questions, and then throwing an error if
 * some are declined. Also logs the declined questions.
 *
 * @return {Promise} Promise with success/failure
 */
export function run() {
  let questions = getChecklist().checklist;
  const length = questions.length;

  questions = questions.map(({ title, description }, i) => {
    const count = i + 1;
    // Show the count in the first line of the question
    let message = `${count}/${length}\n${title}`;

    if (description) {
      message += `\n - ${description}`;
    }

    message += '\n\n';

    return {
      type: 'confirm',
      name: `${i}`,
      message,
      title,
    };
  });

  return inquirer.prompt(questions).then((answers) => {
    const failed = [];

    Object.keys(answers).forEach((key) => {
      if (answers[key] === false) {
        failed.push(questions[parseInt(key, 10)].title);
      }
    });

    if (failed.length) {
      let error = '\n\n\n1 or more checklist items were declined:';

      failed.forEach((title) => {
        error += `\n - ${title}`;
      });

      error += '\n\n';

      throw new Error(error);
    }
  });
}

function remove(callback) {
  const items = getChecklist().checklist.map(({ title }) => title);
  const choices = ['Back'].concat(items);

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'item',
        message: 'Select an item to delete',
        choices,
      },
    ])
    .then(({ item }) => {
      if (item === 'Back') {
        return callback();
      }

      removeFromChecklist(item);

      if (getChecklist().checklist.length) {
        return remove(callback);
      }

      return callback();
    });
}

function init() {
  const actions = ['Run', 'Add'];

  if (getChecklist().checklist.length) {
    actions.push('Remove');
  }

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
        case 'Add':
          return add(init);

        case 'Run':
          return run();

        case 'Remove':
          return remove(init);

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

export default function () {
  init();
}
