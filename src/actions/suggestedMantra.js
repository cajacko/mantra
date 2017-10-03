/**
 * Redux action to add a suggestion
 *
 * @param  {string} id The ID of the suggestion to add
 * @return {object}    The action object to dispatch
 */
export function add(id) {
  return { type: 'ADD_SUGGESTION', payload: id };
}

/**
 * Redux action to discard a suggestion
 *
 * @param  {string} id The ID of the suggestion to discard
 * @return {object}    The action object to dispatch
 */
export function discard(id) {
  return { type: 'DISCARD_SUGGESTION', payload: id };
}
