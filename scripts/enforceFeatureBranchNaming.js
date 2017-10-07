/* eslint no-console: 0 */
import { execSync } from 'child_process';
import {
  getTrelloIdBranchMap,
  setTrelloIdBranchMap,
} from 'scripts/helpers/getSetTrelloIdBranchMap';
import { getTrello } from 'scripts/helpers/trello';

let idBranchMap;

function isBranchInMap(id) {
  idBranchMap = getTrelloIdBranchMap();

  if (!idBranchMap) {
    idBranchMap = {};
    return false;
  }

  if (idBranchMap[id]) {
    return true;
  }

  console.error(`${id} is not in idBranchMap`);
  return false;
}

function writeBranchInMap(branchname, id) {
  idBranchMap[id] = branchname;
  setTrelloIdBranchMap(idBranchMap);
}

function cardIsInTrello(id) {
  return getTrello().then(
    ({ cards }) =>
      new Promise((resolve, reject) => {
        let isIn = false;

        cards.forEach(({ shortLink }) => {
          if (shortLink === id) {
            isIn = true;
          }
        });

        if (isIn === false) {
          reject(`${id} is not in trello board`);
        } else {
          resolve();
        }
      }),
  );
}

function isBranchValid(branchname) {
  return new Promise((resolve, reject) => {
    const id = branchname.replace('feature/', '').split('_')[0];

    if (isBranchInMap(id)) {
      resolve();
      return;
    }

    cardIsInTrello(id)
      .then(() => {
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
    isBranchValid(branchname).catch((e) => {
      console.error(e);
      // Set timeout is needed as a trick to stop the promise, turning the
      // exception into a reject()
      setTimeout(() => {
        throw new Error(`
            Feature branch name is not valid!
            The feature branch name must be based off a trello card.
            e.g. feature/ohdDJHfoi_new_feature_from_trello

            Stash your changes, create a valid branch and pop stash.
            Initialise a valid feature branch with "npm run newbranch"
          `);
      });
    });
  }
}

init();
