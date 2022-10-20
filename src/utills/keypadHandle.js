import { Operators } from '@/constants';
import {
  addToHistory,
  addValue,
  deleteValue,
  evaluate,
  toggleHistory,
} from '@/store/actionCreators';
import { calculatorManager } from '@/utills/calculatorManager';

const { Equal, Remove, Reset, ChangeSymbol } = Operators;
const HISTORY_TITLE = 'History';

export const keypadHandle = (event, dispatch) => {
  let { target } = event;
  if (target.tagName === 'DIV') return;

  target = event.target.textContent;

  switch (target) {
    case Remove: {
      calculatorManager.removeCount();
      dispatch(deleteValue(calculatorManager.expression, calculatorManager.prevValue));
      break;
    }
    case Reset: {
      calculatorManager.removeLastElement();
      dispatch(addValue(calculatorManager.expression, calculatorManager.prevValue));
      break;
    }
    case Equal: {
      calculatorManager.returnResult();
      dispatch(evaluate(calculatorManager.prevValue));
      dispatch(addToHistory(calculatorManager.history));
      break;
    }
    case ChangeSymbol: {
      calculatorManager.toggleSymbol();
      dispatch(addValue(calculatorManager.expression, calculatorManager.prevValue));
      break;
    }
    case HISTORY_TITLE: {
      dispatch(toggleHistory());
      break;
    }
    default: {
      calculatorManager.setCount(target);
      dispatch(addValue(calculatorManager.expression, calculatorManager.prevValue));
    }
  }
};
