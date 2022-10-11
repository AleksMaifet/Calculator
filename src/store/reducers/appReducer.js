import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  CLEAR_HISTORY,
  DELETE_VALUE,
  EVALUATE,
  SET_THEME_APP,
} from '@/constants';

const BASE_THEME_APP = 'based';

const initialState = {
  expression: '',
  historyList: [],
  themeApp: BASE_THEME_APP,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
    case DELETE_VALUE:
    case EVALUATE:
    case CLEAR_HISTORY:
    case SET_THEME_APP:
    case ADD_TO_HISTORY:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
