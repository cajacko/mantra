import { execSync } from 'child_process';

export function getBranchName() {
  return execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  });
}
