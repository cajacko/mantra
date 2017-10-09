/* eslint no-console: 0 */
import { spawn } from 'child_process';

export default function (command, dataCallback) {
  return new Promise((resolve, reject) => {
    const commands = command.split(' ');
    const ls = spawn(commands.splice(0, 1)[0], commands);

    ls.stdout.on('data', (data) => {
      console.log(`${data}`);
      if (dataCallback) dataCallback(`${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`${data}`);
      if (dataCallback) dataCallback(`${data}`);
    });

    ls.on('close', (code) => {
      if (code) {
        reject();
      } else {
        resolve(`Process exited with code ${code}`);
      }
    });
  });
}
