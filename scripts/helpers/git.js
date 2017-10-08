import { execSync } from 'child_process';
import runCommand from 'scripts/helpers/runCommand';

function createFeatureBranch(name) {
  const command = `git checkout -b feature/${name} develop`;
  return execSync(command, { encoding: 'utf8' });
}

export function getFeatures() {
  const rawOutput = execSync('git branch', {
    encoding: 'utf8',
  });

  const features = [];

  rawOutput.split('\n').forEach((branch) => {
    if (branch.includes('feature/')) {
      features.push(
        branch
          .replace('* ', '')
          .replace('feature/', '')
          .trim(),
      );
    }
  });

  return features;
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
