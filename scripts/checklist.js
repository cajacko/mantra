import inquirer from 'inquirer';

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
