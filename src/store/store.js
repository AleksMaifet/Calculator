import { combineReducers, legacy_createStore as createStore } from 'redux';

import { loadState, saveState } from '@/localStorage';
import { appReducer } from '@/store/reducers';

const reducers = combineReducers({
  app: appReducer,
});

const persistedState = loadState();

export const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});
