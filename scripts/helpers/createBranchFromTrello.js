/* eslint no-console: 0 */
import {
  getTrelloIdBranchMap,
  setTrelloIdBranchMap,
} from 'scripts/helpers/getSetTrelloIdBranchMap';
import { getTrello } from 'scripts/helpers/trello';
import { createFeatureBranch } from 'scripts/helpers/git';

const listName = 'Doing';

function getList(lists) {
  let listId;

  lists.forEach((list) => {
    if (list.name === listName && list.closed === false) {
      listId = list.id;
    }
  });

  if (!listId) {
    throw new Error(`Could not find "${listName}" list on Trello board`);
  }

  return listId;
}

function getCard(cards, list) {
  const listCards = [];

  cards.forEach((card) => {
    if (card.idList === list && card.closed === false) {
      listCards.push(card);
    }
  });

  if (listCards.length === 0) {
    throw new Error(`No card on "${listName}" list`);
  } else if (listCards.length > 1) {
    throw new Error(`Too many cards on the "${listName}" list`);
  }

  return listCards[0];
}

function getBranchName(card) {
  const id = card.shortLink;
  const name = card.name;
  const branchName = `${id}_${name.replace(/ /g, '_').toLowerCase()}`;

  return branchName;
}

function mapIdToBranchName(branchName, id) {
  let idBranchMap = getTrelloIdBranchMap();

  if (!idBranchMap) {
    idBranchMap = {};
  }

  idBranchMap[id] = branchName;

  setTrelloIdBranchMap(idBranchMap);
}

export default function () {
  return getTrello()
    .then((json) => {
      const list = getList(json.lists);
      const card = getCard(json.cards, list);
      const branchName = getBranchName(card);
      console.log(branchName);
      createFeatureBranch(branchName);
      mapIdToBranchName(branchName, card.shortLink);
    })
    .catch((e) => {
      throw new Error(e);
    });
}
