import mergeItems from 'helpers/mergeItems';

const sourcesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SAVE_MANTRA': {
      const { source } = payload;

      if (source && source.id) {
        const { id } = source;

        const newState = Object.assign({}, state);
        newState[id] = source;
        return newState;
      }

      return state;
    }

    case 'LOGIN':
      return mergeItems(state, payload.data.sources);

    case 'SYNC_SUCCESS':
      return mergeItems(state, payload.sources);

    default:
      return state;
  }
};

export default sourcesReducer;
