const defaultSettings = {
  prefillSource: true,
};

const settingsReducer = (state = defaultSettings, { type, payload }) => {
  switch (type) {
    case 'CHANGE_SETTING': {
      const newState = Object.assign({}, state);
      newState[payload.key] = payload.value;
      return newState;
    }

    default:
      return state;
  }
};

export default settingsReducer;
