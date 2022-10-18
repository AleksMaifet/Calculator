export const ToggleSymbolHelper = expression => {
  if (/(\((-\d+)|\(-|\(-\d+[.,]|\(-\d+[.,]\d+|\(-.\d+)(?!.*\(-)$/.test(expression)) {
    return expression.replace(/(\(-)(?!.*\(-)/, '');
  }

  if (/[0-9.,]+$/.test(expression)) {
    return expression.replace(/[0-9.,]+$/, num => {
      if (num) {
        return `(-${num}`;
      }
    });
  }

  return `${expression}(-`;
};
