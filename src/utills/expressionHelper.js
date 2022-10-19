export const removeLastElement = expression => expression.slice(0, -1);

export const getPrevValue = expression =>
  expression
    .split(/[^0-9.,]/)
    .filter(el => el)
    .at(-1);

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
