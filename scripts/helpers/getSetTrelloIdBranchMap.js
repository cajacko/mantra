import { readJsonSync, writeJsonSync } from 'fs-extra';
import { join } from 'path';

const idBranchMapFile = join(__dirname, '../tmp/trelloIdBranchNameMap.json');

export function getTrelloIdBranchMap() {
  return readJsonSync(idBranchMapFile, {
    throws: false,
  });
}

export function setTrelloIdBranchMap(idBranchMap) {
  writeJsonSync(idBranchMapFile, idBranchMap, { spaces: 2 });
}
