import { Operators } from '@/constants';

const { Minus, Dot, RightParenthesis } = Operators;

const EMPTY = '';
const LAST_ELEMENT = -1;

export const createArrayValues = expression => {
  if (typeof expression !== 'string') return;

  let element = EMPTY;
  let result = [];

  for (const item of expression) {
    if (
      item === Minus &&
      !element.length &&
      result.at(LAST_ELEMENT) !== RightParenthesis
    ) {
      element = Minus;
      continue;
    }

    if (item === Dot) {
      element += Dot;
      continue;
    }

    if (Number.isNaN(Number(item))) {
      result = [...result, element];
      element = EMPTY;
      result = [...result, item];
      continue;
    }

    element += item;
  }

  result = [...result, element].filter(item => item);

  return result;
};
