import { Operators } from '@/constants';

const { RightParenthesis } = Operators;

const START_VALUE = 0;

const removeLastElement = expression => expression.slice(0, -1);

const parenthesisValidation = () => {
  let parenthesisAmount = START_VALUE;

  return (expression, currentValue) => {
    const matches = expression.match(/\(/g);

    if (matches && currentValue !== RightParenthesis) {
      parenthesisAmount = matches.length;
    } else if (!matches) {
      parenthesisAmount = START_VALUE;
    }

    if (currentValue === RightParenthesis) {
      parenthesisAmount -= 1;
    }

    if (parenthesisAmount < START_VALUE) {
      parenthesisAmount = START_VALUE;
      return parenthesisAmount === START_VALUE;
    }

    return parenthesisAmount < START_VALUE;
  };
};

const isParenthesisValid = parenthesisValidation();

export const expressionHelper = (expression, currentValue) => {
  if (/\d+\.\d+\.|\d+\.\.|\.\d+\.|\.\./.test(expression)) {
    return removeLastElement(expression);
  }

  if (/\(\(|\)\(|\([*/+)]|\(\D\)|\d\(/.test(expression)) {
    return removeLastElement(expression);
  }

  if (/^00/.test(expression)) {
    return removeLastElement(expression);
  }

  if (isParenthesisValid(expression, currentValue)) {
    return removeLastElement(expression);
  }

  return expression;
};
