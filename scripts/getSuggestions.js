// Get the suggested mantra from contentful and hardcode them in a JSON file

import { createClient } from 'contentful';
import { writeJson } from 'fs-extra';
import { join } from 'path';

require('dotenv').config('../.env');

// Setup coontentful client so can start making requests
const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Randomise an array in place
 * @param  {Array} a The array to randomise
 * @return {Void}   No return value, edits array in place
 */
function shuffle(a) {
  let j;
  let x;
  let i;

  for (i = a.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    // eslint-disable-next-line no-param-reassign
    a[i] = a[j];
    // eslint-disable-next-line no-param-reassign
    a[j] = x;
  }
}

const suggestions = [];

client
  // Get the suggestions
  .getEntries({
    content_type: 'mantra',
    'fields.deleted': false,
    'fields.suggestion': true,
    order: '-fields.dateAdded',
    limit: 100,
  })
  .then((response) => {
    // Add the suggestion details to the array
    response.items.forEach((item) => {
      const mantra = {
        title: item.fields.title,
        id: item.sys.id,
        key: item.sys.id,
      };

      suggestions.push(mantra);
    });

    // Radomise the sugegstions
    shuffle(suggestions);

    // eslint-disable-next-line no-console
    console.log(suggestions.length);

    // Hardcode the suggestions
    return writeJson(
      join(__dirname, '../src/data/suggestions.json'),
      suggestions
    );
  });
