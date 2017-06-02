import rimraf from 'rimraf';
import { exec } from 'child_process';
import webpack from 'webpack';
import options from '../webpack/index';
import isProduction from './isProduction';
import compileWebpack from './compileWebpack';

const cmd = 'babel src -d dist -s --copy-files';
const production = isProduction();

rimraf(
  'dist/*',
  {},
  (distError) => {
    if (distError) {
      throw distError;
    }

    exec(cmd, (execError, stdout, stderr) => {
      if (stdout) {
        // eslint-disable-next-line
        console.log(stdout);
      }

      if (stderr) {
        // eslint-disable-next-line
        console.log(stderr);
      }

      if (execError) {
        throw execError;
      }

      rimraf(
        'dist/public',
        {},
        (publicError) => {
          if (publicError) {
            throw publicError;
          }

          webpack(options({ production }), compileWebpack);
        },
      );
    });
  },
);
