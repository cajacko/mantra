import { createClient } from 'contentful';
import { writeJson } from 'fs-extra';
import { join } from 'path';

require('dotenv').config('../.env');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

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

    return writeJson(
      join(__dirname, '../src/data/suggestions.json'),
      suggestions
    );
  });
