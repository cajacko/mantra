import { createClient } from 'contentful';
import { writeJson } from 'fs-extra';
import { join } from 'path';

require('dotenv').config('../.env');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

function shuffle(a) {
  let j;
  let x;
  let i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

const suggestions = [];

client
  .getEntries({
    content_type: 'mantra',
    'fields.deleted': false,
    'fields.suggestion': true,
    order: '-fields.dateAdded',
    limit: 100,
  })
  .then((response) => {
    response.items.forEach((item) => {
      const mantra = {
        title: item.fields.title,
        id: item.sys.id,
        key: item.sys.id,
      };

      suggestions.push(mantra);
    });

    shuffle(suggestions);

    console.log(suggestions.length);

    return writeJson(
      join(__dirname, '../src/data/suggestions.json'),
      suggestions
    );
  });
