import { createArrayValues, evaluate, reversePolishNotation } from '@/utills';

const START_EXPRESSION = '';
const LAST_ELEMENT = -1;

class CalculatorManager {
  static singleton;

  constructor() {
    if (CalculatorManager.singleton) {
      return CalculatorManager.singleton;
    }
    CalculatorManager.singleton = this;

    this.expression = START_EXPRESSION;
    this.history = [];
  }

  setCount(currentValue) {
    const lastChar = this.expression.at(-1);
    const regExpression = /[-+/*%]/g;
    const isItOperatorChange =
      lastChar && lastChar.match(regExpression) && currentValue.match(regExpression);

    if (isItOperatorChange) {
      if (currentValue === lastChar) return;
      this.expression = this.expression.slice(0, -1);
    }
    this.expression += currentValue;
  }

  returnResult() {
    const notation = reversePolishNotation(createArrayValues(this.expression));
    const result = evaluate(notation);
    if (!result) {
      return;
    }
    this.history = [`${this.expression} = ${result}`, ...this.history];
    this.expression = result;
  }

  percentResult(operator) {
    this.expression = this.expression + operator;
    const notation = reversePolishNotation(createArrayValues(this.expression));
    this.expression = evaluate(notation);
  }

  removeCount() {
    this.expression = START_EXPRESSION;
  }

  removeLastElement() {
    this.expression = this.expression.slice(0, LAST_ELEMENT);
  }

  clearHistory() {
    this.history = [];
  }
}

export const calculatorManager = new CalculatorManager();
