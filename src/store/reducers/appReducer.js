import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  CLEAR_HISTORY,
  DELETE_VALUE,
  EVALUATE,
} from '@/constants';

const initialState = {
  expression: '',
  historyList: [],
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
    case DELETE_VALUE:
    case EVALUATE:
    case CLEAR_HISTORY:
    case ADD_TO_HISTORY:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
