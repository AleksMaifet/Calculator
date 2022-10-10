import { ADD_TO_HISTORY, ADD_VALUE, DELETE_VALUE, EVALUATE } from '@/constants';

export const addValue = expression => ({ type: ADD_VALUE, payload: { expression } });
export const deleteValue = expression => ({
  type: DELETE_VALUE,
  payload: { expression },
});
export const addToHistory = historyList => ({
  type: ADD_TO_HISTORY,
  payload: { historyList },
});
export const evaluate = expression => ({ type: EVALUATE, payload: { expression } });

// export const setError = value => ({ type: SET_ERROR, payload: { value } });
