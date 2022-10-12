import { Operators } from '@/constants';

export const evaluate = expression => {
  const { Plus, Minus, Multiplication, Divisor, Percent } = Operators;

  const ERROR_TEXT = 'Error';

  let stack = [];

  while (expression.length) {
    const token = expression.shift();

    if (!isNaN(token)) {
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
        stack = [...stack, secondNumber % firstNumber];
        break;
      default:
        throw new Error(ERROR_TEXT);
    }
  }

  return String(
    new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(stack.pop()),
  );
};
