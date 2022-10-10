import { Operators } from '@/constants';

export const createArrayValues = expression => {
  if (typeof expression !== 'string') return;

  const { Minus, Dot } = Operators;

  const EMPTY = '';

  let result = [];
  let element = EMPTY;

  expression.split(EMPTY).forEach(item => {
    if (item === Minus && !element.length) {
      element = Minus;
      return;
    }
    if (item === Dot && element.length) {
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
