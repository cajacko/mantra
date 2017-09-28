import { copySync } from 'fs-extra';
import { join } from 'path';

copySync(
  join(
    __dirname,
    process.argv[2].includes('live') ? '../app.live.json' : '../app.test.json',
  ),
  join(__dirname, '../app.json'),
);
