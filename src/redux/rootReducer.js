import { combineReducers } from 'redux';

import search from './search/reducer';
import appSettings from './appSettings/reducer';

export default combineReducers({
  search,
  appSettings
});
