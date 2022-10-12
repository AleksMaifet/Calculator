import { Operators } from '@/constants';

export const reversePolishNotation = expression => {
  if (!Array.isArray(expression)) return null;

  console.log(expression)

  const { LeftParenthesis, RightParenthesis } = Operators;
  const LOW_PRIORITY = 0;
  const LAST_ELEMENT = -1;

  let queue = [];
  let stack = [];
  const priority = {
    '(': 1,
    '+': 2,
    '-': 2,
    '/': 3,
    '*': 3,
    '%': 3,
  };

  while (expression.length) {
    const token = expression.shift();

    const isOperator = isNaN(token);
    const isStackFilled = stack.length;

    const currentOperatorPriority = priority[token] || LOW_PRIORITY;

    let topOperatorStackPriority = isStackFilled
      ? priority[stack.at(LAST_ELEMENT)]
      : LOW_PRIORITY;

    switch (true) {
      case isOperator && token === RightParenthesis: {
        let operator = null;
        while ((operator = stack.pop()) !== LeftParenthesis) {
          queue = [...queue, operator];
        }
        break;
      }

      case !isOperator:
        queue = [...queue, token];
        break;

      case isOperator &&
      (!isStackFilled ||
        token === LeftParenthesis ||
        currentOperatorPriority > topOperatorStackPriority):
        stack = [...stack, token];
        break;

      default:
        while (currentOperatorPriority <= topOperatorStackPriority) {
          queue = [...queue, stack.pop()];
          topOperatorStackPriority = isStackFilled
            ? priority[stack.at(LAST_ELEMENT)]
            : LOW_PRIORITY;
        }
        stack = [...stack, token];
    }
  }

  while (stack.length) {
    queue = [...queue, stack.pop()];
  }

  return queue;
};
