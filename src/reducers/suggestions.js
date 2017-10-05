const defaultState = [];

for (let i = 0; i < 20; i += 1) {
  defaultState.push({
    title: `Suggestion ${i}`,
    id: `${i}`,
    // Key prop needed for flat list
    key: `${i}`,
  });
}

export default () => defaultState;
