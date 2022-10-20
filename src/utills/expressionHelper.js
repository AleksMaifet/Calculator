export const removeLastElement = expression => expression.slice(0, -1);

const LAST_ELEMENT = -1;
const MAX_LENGTH_EXPRESSION = 2;
const ERROR_MESSAGE = 'Max 2 symbols';

export const IsExpressionValidPercent = expression => {
  const { length } = expression.split(/[^0-9.,]/g).filter(el => el);
  if (length > MAX_LENGTH_EXPRESSION) {
    throw new Error(ERROR_MESSAGE);
  }
  return expression;
};

export const getPrevValue = expression =>
  expression
    .split(/[^0-9.,]/)
    .filter(el => el)
    .at(LAST_ELEMENT);

export const parenthesisValidation = expression => {
  const leftParenthesis = expression.match(/\(/g);
  const rightParenthesis = expression.match(/\)/g);

  if (leftParenthesis && rightParenthesis) {
    if (leftParenthesis.length < rightParenthesis.length) {
      return removeLastElement(expression);
    }
  }

  return expression;
};

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
