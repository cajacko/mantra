import { getBranchName } from 'scripts/helpers/git';

const branchName = getBranchName();

switch (branchName) {
  case 'master':
    throw new Error(`
      Cannot commit directly onto master branch.
    `);
  case 'develop':
    throw new Error(`
      Cannot commit directly onto develop branch.
    `);
  default:
    break;
}
