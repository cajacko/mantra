/**
 * Get all suggestions that a user has not added or discarded
 *
 * @param  {Array} suggestions          Array of suggestions
 * @param  {Array} addedSuggestions     Array of suggestion id's which have been
 * added
 * @param  {Array} discardedSuggestions Array of suggestion id's which have been
 * discarded
 * @return {Array}                      Array of suggestions
 */
export default function (suggestions, addedSuggestions, discardedSuggestions) {
  return suggestions.filter(({ id }) => {
    if (addedSuggestions.includes(id)) {
      return false;
    }

    if (discardedSuggestions.includes(id)) {
      return false;
    }

    return true;
  });
}
