import webpack from 'webpack';
import { create } from 'browser-sync';
import nodemon from 'nodemon';
import options from '../webpack/index';
import port from '../src/constants/port';
import isProduction from './isProduction';
import compileWebpack from './compileWebpack';
import listenLog from '../src/constants/listenLog';

const bs = create();

nodemon({
  script: 'src/server/index.js',
  exec: 'node node_modules/babel-cli/bin/babel-node.js',
  ext: 'js, ejs, jsx',
  ignore: ['scripts/**/*', 'webpack/**/*', 'src/public/*.js'],
  stdout: false,
});

const production = isProduction();
const compiler = webpack(options({ production }));

let nodemonStarted = false;
let bsStarted = false;

nodemon.on('quit', () => {
  if (bsStarted) {
    bs.exit();
  }
}).on('readable', function readable() {
  this.stdout.setEncoding('utf8');
  this.stderr.setEncoding('utf8');

  this.stdout.on('data', (log) => {
    // eslint-disable-next-line
    console.log(log);

    if (listenLog === log || log.includes(listenLog)) {
      if (bsStarted) {
        bs.reload();
      }

      if (!nodemonStarted) {
        bs.init({
          proxy: `localhost:${port}`,
        }, () => {
          bsStarted = true;

          compiler.watch({}, (err, stats) => {
            compileWebpack(err, stats, bs);
          });
        });

        nodemonStarted = true;
      }
    }
  });

  // eslint-disable-next-line
  this.stderr.on('data', log => console.log(log));
});
