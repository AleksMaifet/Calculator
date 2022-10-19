import { Operators } from '@/constants';

const { RightParenthesis } = Operators;

const START_VALUE = 0;

export const removeLastElement = expression => expression.slice(0, -1);

export const getPrevValue = expression =>
  expression
    .split(/[^0-9.,]/)
    .filter(el => el)
    .at(-1);

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
      return removeLastElement(expression);
    }

    if (parenthesisAmount < START_VALUE) {
      return removeLastElement(expression);
    }

    return expression;
  };
};

export const isParenthesisValid = parenthesisValidation();

export const expressionHelper = expression => {
  if (/\d+\.\d+\.|\d+\.\.|\.\d+\.|\.\./.test(expression)) {
    return removeLastElement(expression);
  }

  if (/\(\(|\)\(|\([*/+)]|\(\D\)|\d\(/.test(expression)) {
    return removeLastElement(expression);
  }

  if (/^00/.test(expression)) {
    return removeLastElement(expression);
  }

  return expression;
};
