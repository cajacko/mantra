import { readFileSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import { getBranchId } from 'scripts/helpers/git';

const messageFile = join(__dirname, '../.git/COMMIT_EDITMSG');

function getTrelloUrl() {
  const id = getBranchId();

  if (id) {
    return `https://trello.com/c/${id}`;
  }

  return id;
}

function editMessage(message, trelloUrl) {
  let editedMessage = message;
  editedMessage += `

Trello card: ${trelloUrl}
  `;

  return editedMessage;
}

function init() {
  const trelloUrl = getTrelloUrl();

  if (trelloUrl) {
    let message = readFileSync(messageFile, 'utf8');
    message = editMessage(message, trelloUrl);
    writeFileSync(messageFile, message);
  }
}

init();
