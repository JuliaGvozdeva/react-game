import initialState from './initialState';

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      const newSettings = state.settings.slice();
      const index = newSettings.findIndex(item => item.id === action.target);
      newSettings[index].state = action.value;
      return { ...state, settings: [...newSettings] }

    case 'TOGGLE_LANG':
      return { ...state, lang: action.value }

    case 'TOGGLE_IMAGES':
      return { ...state, images: action.value }

    case 'TOGGLE_SCORE':
      return { ...state, score: action.payload }

    default: return state;
  }
};

export default settingsReducer;