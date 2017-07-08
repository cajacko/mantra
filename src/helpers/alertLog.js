let logId = 0;

export default function (message) {
  logId += 1;

  if (typeof message === 'string') {
    // eslint-disable-next-line
    alert(`ID: ${logId} - ${message}`);
  } else {
    // eslint-disable-next-line
    alert(`ID: ${logId} - Message is not a string`);
  }
}
