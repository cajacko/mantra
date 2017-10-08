import { readJsonSync } from 'fs-extra';
import { join } from 'path';
import semver from 'semver';

const packageFile = join(__dirname, '../../package.json');

export function incrementVersion(version, type) {
  return semver.inc(version, type);
}

export function getVersion() {
  const json = readJsonSync(packageFile);
  return json.version;
}

export function getNewVersion(type) {
  const version = getVersion();
  return incrementVersion(version, type);
}
