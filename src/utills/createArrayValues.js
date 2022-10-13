import { Operators } from '@/constants';

export const createArrayValues = expression => {
  const MIN_LENGTH_EXPRESSION = 3;
  const EMPTY = '';
  const LAST_ELEMENT = -1;
  const EQUAL_VALUE = 0;

  const { Minus, Dot, LeftParenthesis, RightParenthesis } = Operators;

  if (typeof expression !== 'string') return;
  if (expression.length < MIN_LENGTH_EXPRESSION) return;

  let element = EMPTY;
  let result = [];
  let countParentheses = EQUAL_VALUE;

  expression.split(EMPTY).forEach(item => {
    if (item === LeftParenthesis) {
      countParentheses += 1;
    }

    if (item === RightParenthesis) {
      countParentheses -= 1;
    }

    if (
      item === Minus &&
      !element.length &&
      result.at(LAST_ELEMENT) !== RightParenthesis
    ) {
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

  result = [...result, element].filter(item => item);

  if (countParentheses !== EQUAL_VALUE) {
    return;
  }
  return result;
};
