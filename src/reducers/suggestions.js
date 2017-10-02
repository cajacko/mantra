const defaultState = {};

for (let i = 0; i < 20; i += 1) {
  defaultState[i] = {
    title: `Suggestion ${i}`,
    id: i,
    order: 1,
  };
}

export default () => defaultState;
