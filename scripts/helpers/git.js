import { execSync } from 'child_process';
import runCommand from 'run-command-promise';

export function checkoutDevelop() {
  return runCommand('git checkout develop');
}

export function createReleaseBranch(version) {
  return runCommand(`git checkout -b release/${version} develop`);
}

export function createFeatureBranch(name) {
  const command = `git checkout -b feature/${name} develop`;
  return execSync(command, { encoding: 'utf8' });
}

export function getBranches(type) {
  const rawOutput = execSync('git branch', {
    encoding: 'utf8',
  });

  const branches = [];

  rawOutput.split('\n').forEach((branch) => {
    if (branch.includes(`${type}/`)) {
      branches.push(
        branch
          .replace('* ', '')
          .replace(`${type}/`, '')
          .trim(),
      );
    }
  });

  return branches;
}

export function finishRelease(release, shouldDelete) {
  return runCommand('git checkout master')
    .then(() => runCommand(`git merge --no-ff release/${release}`))
    .then(() => runCommand(`git tag -a -m '' v${release}`))
    .then(() => runCommand('git checkout develop'))
    .then(() => runCommand(`git merge --no-ff release/${release}`))
    .then(() => {
      if (shouldDelete) {
        return runCommand(`git branch -d release/${release}`);
      }

      return true;
    });
}

export function finishFeature(feature, shouldDelete) {
  return runCommand('git checkout develop')
    .then(() => runCommand(`git merge --no-ff feature/${feature}`))
    .then(() => {
      if (shouldDelete) {
        return runCommand(`git branch -d feature/${feature}`);
      }

      return true;
    });
}

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

export function finishBranch(branch, type, shouldDelete) {
  switch (type) {
    case 'feature':
      return finishFeature(branch, shouldDelete);
    case 'release':
      return finishRelease(branch, shouldDelete);

    default:
      throw new Error('Undefined type of branch');
  }
}
