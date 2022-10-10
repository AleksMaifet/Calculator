import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  DELETE_VALUE,
  EVALUATE,
  SET_ERROR,
} from '@/constants';

const initialState = {
  expression: '',
  historyList: [],
  errorString: '',
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
    case DELETE_VALUE:
    case EVALUATE:
    case ADD_TO_HISTORY:
      return {
        ...state,
        ...payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorString: payload.value,
      };
    default:
      return state;
  }
};
