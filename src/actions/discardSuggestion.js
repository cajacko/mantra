/**
 * Redux action to discard a suggestion
 *
 * @param  {string} id The ID of the suggestion to discard
 * @return {object}    The action object to dispatch
 */
export default function (id) {
  return { type: 'DISCARD_SUGGESTION', payload: id };
}
