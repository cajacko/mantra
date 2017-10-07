import inquirer from 'inquirer';

function init() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        choices: ['Run', 'Add', 'Remove', 'Edit'],
        message: 'What do you want to do?',
      },
    ])
    .then(({ action }) => {
      switch (action) {
        case 'Add': {
          return init();
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
