import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  CLEAR_HISTORY,
  DELETE_VALUE,
  EVALUATE,
  SET_THEME_APP,
} from '@/constants';

export const addValue = expression => ({ type: ADD_VALUE, payload: { expression } });

export const evaluate = expression => ({ type: EVALUATE, payload: { expression } });

export const deleteValue = expression => ({
  type: DELETE_VALUE,
  payload: { expression },
});

export const addToHistory = historyList => ({
  type: ADD_TO_HISTORY,
  payload: { historyList },
});

export const clearHistory = historyList => ({
  type: CLEAR_HISTORY,
  payload: { historyList },
});

export const setTheme = themeApp => ({
  type: SET_THEME_APP,
  payload: { themeApp },
});
// export const setError = value => ({ type: SET_ERROR, payload: { value } });
