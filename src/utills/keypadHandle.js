import { Operators } from '@/constants';
import { addToHistory, addValue, deleteValue, evaluate } from '@/store/actionCreators';
import { calculatorManager } from '@/utills/calculatorManager';

export const keypadHandle = (event, dispatch) => {
  let target = event.target;
  if (target.tagName === 'DIV') return null;

  target = event.target.textContent;

  const { Equal, Remove, Reset, Percent } = Operators;

  switch (target) {
    case Remove: {
      calculatorManager.removeCount();
      dispatch(deleteValue(calculatorManager.expression));
      break;
    }
    case Reset: {
      calculatorManager.removeLastElement();
      dispatch(addValue(calculatorManager.expression));
      break;
    }
    case Equal: {
      calculatorManager.returnResult();
      dispatch(evaluate(calculatorManager.expression));
      dispatch(addToHistory(calculatorManager.history));
      break;
    }
    case Percent: {
      calculatorManager.percentResult();
      dispatch(evaluate(calculatorManager.expression));
      break;
    }
    default: {
      calculatorManager.setCount(target);
      dispatch(addValue(calculatorManager.expression));
    }
  }
};
