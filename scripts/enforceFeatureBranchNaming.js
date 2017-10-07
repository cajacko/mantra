import { execSync } from 'child_process';
import {
  getTrelloIdBranchMap,
  setTrelloIdBranchMap,
} from 'scripts/helpers/getSetTrelloIdBranchMap';
import { getTrello } from 'scripts/helpers/trello';

let idBranchMap;

function isBranchInMap(id) {
  return false;

  idBranchMap = getTrelloIdBranchMap();

  if (idBranchMap[id]) {
    return true;
  }

  return false;
}

function writeBranchInMap(branchname, id) {
  idBranchMap[id] = branchname;
  setTrelloIdBranchMap(idBranchMap);
}

function cardIsInTrello(id) {
  getTrello().then(
    ({ cards }) =>
      new Promise((resolve, reject) => {
        cards.forEach(({ shortLink }) => {
          if (shortLink === id) {
            resolve();
          }
        });

        reject(false);
      }),
  );
}

function isBranchValid(branchname) {
  return new Promise((resolve, reject) => {
    const id = branchname.split('_')[0];

    if (isBranchInMap(id)) {
      resolve();
      return;
    }

    cardIsInTrello(id)
      .then((inTrello) => {
        writeBranchInMap(branchname, id);
        resolve();
      })
      .catch(reject);
  });
}

function init() {
  const branchname = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  });

  if (branchname.includes('feature')) {
    isBranchValid(branchname)
      .then(() => {
        throw new Error('SUCCESS');
      })
      .catch(() => {
        throw new Error(`
        Feature branch name is not valid!
        The feature branch name must be based off a trello card.
        e.g. feature/ohdDJHfoi_new_feature_from_trello

        Stash your changes, create a valid branch and pop stash.
        Initialise a valid feature branch with "npm run newbranch"
      `);
      });
  } else {
    throw new Error('SUCCESS');
  }
}

init();
