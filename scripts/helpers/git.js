import { execSync } from 'child_process';

export function getBranchName() {
  return execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim();
}

export function getBranchId() {
  const branchname = getBranchName();

  if (branchname.includes('feature')) {
    const parts = branchname.replace('feature/', '').split('_');

    if (parts.length > 1) {
      return parts[0];
    }
  }

  return null;
}
