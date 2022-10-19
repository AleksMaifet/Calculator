import {
  createArrayValues,
  evaluate,
  expressionHelper,
  getPrevValue,
  isEvaluateValidation,
  isParenthesisValid,
  removeLastElement,
  reversePolishNotation,
  ToggleSymbolHelper,
} from '@/utills';

const START_EXPRESSION = '';
const LAST_ELEMENT = -1;

class CalculatorManager {
  constructor() {
    if (CalculatorManager.instance) {
      return CalculatorManager.instance;
    }
    CalculatorManager.instance = this;

    this.expression = START_EXPRESSION;
    this.prevValue = START_EXPRESSION;
    this.history = [];
  }

  setCount(currentValue) {
    if (/[\\+*-]/.test(currentValue) && !this.expression.length) {
      return;
    }

    const lastChar = this.expression.at(-1);
    const regExpression = /[-+/*]/g;
    const isItOperatorChange =
      lastChar && lastChar.match(regExpression) && currentValue.match(regExpression);

    if (isItOperatorChange) {
      if (currentValue === lastChar) return;
      this.expression = this.expression.slice(0, LAST_ELEMENT);
    }

    this.expression += currentValue;

    this.prevValue = getPrevValue(this.expression);

    this.expression = expressionHelper(isParenthesisValid(this.expression, currentValue));
  }

  returnResult() {
    const notation = reversePolishNotation(
      createArrayValues(isEvaluateValidation(this.expression)),
    );
    const result = evaluate(notation);
    if (!result) {
      return;
    }
    this.history = [`${this.expression} = ${result}`, ...this.history];
    this.expression = result;
    this.prevValue = result;
  }

  toggleSymbol() {
    this.expression = ToggleSymbolHelper(this.expression);
  }

  removeCount() {
    this.expression = START_EXPRESSION;
    this.prevValue = START_EXPRESSION;
  }

  removeLastElement() {
    this.expression = removeLastElement(this.expression);
    this.prevValue = removeLastElement(this.prevValue);
    isParenthesisValid(this.expression);
  }

  clearHistory() {
    this.removeCount();
    this.history = [];
  }
}

export const calculatorManager = new CalculatorManager();
