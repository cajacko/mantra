import moment from 'moment';
import uuidv4 from 'uuid/v4';

/**
 * Build a mantra object and then return the action for redux
 *
 * @param  {string} title        The Mantra title
 * @param  {?object} item         An existing mantra object to ammend
 * @param  {?string} suggestionId The ID of a suggested mantra, if this is one
 * @return {object}              The action to dispatch
 */
export default function ({ title, item, suggestionId }) {
  const now = moment().unix();
  let payload = {};

  if (item) {
    payload = Object.assign({}, item);
  }

  // Is this is a suggested mantra then add id
  if (suggestionId) {
    payload.suggestionId = suggestionId;
  }

  payload.title = title;
  payload.dateModified = now;
  payload.deleted = false;
  payload.online = false;

  if (!item) {
    payload.id = uuidv4();
    payload.dateAdded = now;
  }

  return {
    type: 'SAVE_MANTRA',
    payload,
  };
}
