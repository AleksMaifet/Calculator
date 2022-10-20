import {
  ADD_TO_HISTORY,
  ADD_VALUE,
  CLEAR_HISTORY_APP,
  DELETE_VALUE,
  EVALUATE,
  SET_THEME_APP,
  TOGGLE_HISTORY_APP,
} from '@/constants';

const BASE_THEME_APP = 'colored';

const initialState = {
  expression: '',
  historyList: [],
  prevNumber: '',
  isShowHistoryList: true,
  themeApp: BASE_THEME_APP,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_VALUE:
    case DELETE_VALUE:
    case EVALUATE:
    case CLEAR_HISTORY_APP:
    case SET_THEME_APP:
    case ADD_TO_HISTORY:
      return {
        ...state,
        ...payload,
      };
    case TOGGLE_HISTORY_APP:
      return {
        ...state,
        isShowHistoryList: !state.isShowHistoryList,
      };
    default:
      return state;
  }
};
