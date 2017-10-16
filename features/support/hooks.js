/* eslint no-console: 0 */
const { defineSupportCode } = require('cucumber');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { setFailedIndex, setCurrentIndex } = require('./failedIndex');

defineSupportCode(({ Before }) => {
  Before({ timeout: -1 }, (scenario) => {
    setCurrentIndex(0);
    const pass = chalk.green('Pass');
    const choices = [pass];
    const steps = {};

    scenario.scenario.steps.forEach((step, i) => {
      let keyword = step.keyword;

      if (keyword.length === 5) {
        keyword += ' ';
      }

      const messgae = `${chalk.red('Fail')}${chalk.gray(
        ' - '
      )}${keyword}${step.name}`;
      choices.push(messgae);
      steps[messgae] = i;
    });

    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'response',
          choices,
          message: 'Pass or fail?',
        },
      ])
      .then(({ response }) => {
        if (steps[response] !== undefined) {
          return setFailedIndex(steps[response]);
        }

        if (response === pass) {
          return setFailedIndex(null);
        }

        throw new Error('Unexpected response from prompt');
      });
  });
});
