/* eslint no-console: 0 */
import fetch from 'node-fetch';
import { execSync } from 'child_process';

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

function createBranch(name) {
  const command = `git checkout -b feature/${name} develop`;
  const output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}

fetch(process.env.npm_package_config_trelloboardjson)
  .then(res => res.json())
  .then((json) => {
    const list = getList(json.lists);
    const card = getCard(json.cards, list);
    const branchName = getBranchName(card);
    createBranch(branchName);
  })
  .catch((e) => {
    throw new Error(e);
  });
