import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { default as general } from './generalReducer';

const appReducer = combineReducers({
  general,
  router,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_USER_LOGGED_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
