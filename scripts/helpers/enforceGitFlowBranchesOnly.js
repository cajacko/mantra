import { getBranchName } from 'scripts/helpers/git';

function isBranchValid(branchName) {
  if (branchName.split('/').length > 2) {
    return false;
  }

  if (branchName === 'master') {
    return true;
  }

  if (branchName === 'develop') {
    return true;
  }

  if (branchName.startsWith('feature/')) {
    return true;
  }

  if (branchName.startsWith('release/')) {
    return true;
  }

  if (branchName.startsWith('hotfix/')) {
    return true;
  }

  return false;
}

const branchName = getBranchName();

if (!isBranchValid(branchName)) {
  throw new Error(`Branch name does not follow git flow: ${branchName}`);
}
