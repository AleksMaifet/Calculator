import { createArrayValues, evaluate, reversePolishNotation } from '@/utills';

const EMPTY = '';

class CalculatorManager {
  static singleton;

  constructor() {
    if (CalculatorManager.singleton) {
      return CalculatorManager.singleton;
    }
    CalculatorManager.singleton = this;

    this.expression = EMPTY;
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
    this.history = [`${this.expression} = ${result}`, ...this.history];
    this.expression = result;
  }

  percentResult() {
    this.expression = String(this.expression / 100);
  }

  removeCount() {
    this.expression = EMPTY;
  }

  removeLastElement() {
    this.expression = this.expression.slice(0, -1);
  }

  clearHistory() {
    this.history = [];
  }

}

export const calculatorManager = new CalculatorManager();
