import { Operators } from '@/constants';

export const createArrayValues = expression => {
  const MIN_LENGTH_EXPRESSION = 3;
  const EMPTY = '';

  const { Minus, Dot, RightParenthesis } = Operators;

  if (typeof expression !== 'string') return;
  if (expression.length < MIN_LENGTH_EXPRESSION) return;
  if (expression.at(-1) === RightParenthesis && expression.at(-2) === RightParenthesis)
    return;

  let element = EMPTY;
  let result = [];

  expression.split(EMPTY).forEach(item => {
    if (item === Minus && !element.length) {
      element = Minus;
      return;
    }
    if (item === Dot) {
      element += Dot;
      return;
    }
    if (isNaN(item)) {
      result = [...result, element];
      element = EMPTY;
      result = [...result, item];
      return;
    }
    element += item;
  });

  result = [...result, element];

  return result.filter(item => item);
};
