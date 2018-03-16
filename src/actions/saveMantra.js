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
export default function ({ title, source, item, suggestionId }) {
  const now = moment().unix();
  const payload = {};
  let mantra = {};

  if (item) {
    mantra = Object.assign({}, item);
  }

  // Is this is a suggested mantra then add id
  if (suggestionId) {
    mantra.suggestionId = suggestionId;
  }

  mantra.title = title;
  mantra.dateModified = now;
  mantra.deleted = false;
  mantra.online = false;

  if (!item) {
    mantra.id = uuidv4();
    mantra.dateAdded = now;
  }

  if (
    source &&
    source.link &&
    source.title &&
    source.link.length &&
    source.title.length
  ) {
    const sourceData = {
      id: uuidv4(),
      link: source.link,
      title: source.title,
    };

    mantra.source = sourceData.id;
    payload.source = sourceData;
  }

  payload.mantra = mantra;

  return {
    type: 'SAVE_MANTRA',
    payload,
  };
}
