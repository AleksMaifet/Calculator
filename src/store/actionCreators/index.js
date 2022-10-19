import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  CLEAR_HISTORY,
  CLEAR_HISTORY_APP,
  DELETE_VALUE,
  EVALUATE,
  SET_THEME_APP,
} from '@/constants';

export const addValue = (expression, prevNumber) => ({
  type: ADD_VALUE,
  payload: {
    expression,
    prevNumber,
  },
});

export const evaluate = prevNumber => ({
  type: EVALUATE,
  payload: {
    prevNumber,
  },
});

export const deleteValue = (expression, prevNumber) => ({
  type: DELETE_VALUE,
  payload: {
    expression,
    prevNumber,
  },
});

export const addToHistory = historyList => ({
  type: ADD_TO_HISTORY,
  payload: {
    historyList,
  },
});

export const clearHistoryValue = historyList => ({
  type: CLEAR_HISTORY_APP,
  payload: {
    historyList,
  },
});

export const setTheme = themeApp => ({
  type: SET_THEME_APP,
  payload: {
    themeApp,
  },
});
