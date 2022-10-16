import { Operators } from '@/constants';

const { Plus, Minus, Multiplication, Divisor, Percent } = Operators;

const ERROR_TEXT = 'Error';
const MAX_LENGTH_RESULT = 3;
const PERCENT_VALUE = 100;
const EMPTY_RESULT = '';

export const evaluate = expression => {
  let stack = [];

  while (expression.length) {
    const token = expression.shift();

    if (!Number.isNaN(Number(token))) {
      stack = [...stack, parseFloat(token)];
      continue;
    }

    const firstNumber = stack.pop();
    const secondNumber = stack.pop();

    switch (token) {
      case Plus:
        stack = [...stack, secondNumber + firstNumber];
        break;
      case Minus:
        stack = [...stack, secondNumber - firstNumber];
        break;
      case Multiplication:
        stack = [...stack, secondNumber * firstNumber];
        break;
      case Divisor:
        stack = [...stack, secondNumber / firstNumber];
        break;
      case Percent:
        stack = [...stack, firstNumber / PERCENT_VALUE];
        break;
      default:
        throw new Error(ERROR_TEXT);
    }
  }

  const result = stack.pop();

  if (Number.isNaN(Number(result))) {
    return EMPTY_RESULT;
  }

  return result.toLocaleString();
};
