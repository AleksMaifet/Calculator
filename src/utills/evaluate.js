import { Operators } from '@/constants';

export const evaluate = expression => {
  const { Plus, Minus, Multiplication, Divisor, Percent } = Operators;

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
    }
  }

  return String(stack.pop());
};
