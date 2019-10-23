import { CHANGE_THEME } from './actionTypes';

const INITIAL_STATE = {
  theme: 'light',
};

function appSettingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}

export default appSettingsReducer;
