export const expressionChecker = () => {
  let parenthesisAmount = 0;

  const removeLastElement = expression => expression.slice(0, -1);

  return (expression, currentValue) => {
    if (/\d+\.\d+\.|\d+\.\.|\.\d+\.|\.\./.test(expression)) {
      return removeLastElement(expression);
    }

    if (/\(\(/.test(expression)) {
      return removeLastElement(expression);
    }

    if (/^00/.test(expression)) {
      return removeLastElement(expression);
    }

    if (currentValue === ')') {
      parenthesisAmount -= 1;
    }

    if (currentValue === '(') {
      parenthesisAmount += 1;
    }

    if (parenthesisAmount < 0) {
      parenthesisAmount = 0;
      return removeLastElement(expression);
    }

    return expression;
  };
};

export const expressionHelper = expressionChecker();
