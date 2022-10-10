import { combineReducers, legacy_createStore as createStore } from 'redux';

import { appReducer } from '@/store/reducers';

const reducers = combineReducers({
  app: appReducer,
});

export const store = createStore(reducers);

window.store = store;
