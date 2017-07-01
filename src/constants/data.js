import moment from 'moment';
import uuidv4 from 'uuid/v4';

const mantra = [];

for (let i = 0; i < 20; i += 1) {
  mantra.push({
    id: uuidv4(),
    title: `I am Mantra woo ${i}`,
    dateAdded: moment().unix(),
  });
}

export default mantra;
