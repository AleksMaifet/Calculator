import { Operators } from '@/constants';

const { Minus, Dot, LeftParenthesis, RightParenthesis } = Operators;

const EMPTY = '';
const LAST_ELEMENT = -1;
const START_VALUE = 0;

export const createArrayValues = expression => {
  if (typeof expression !== 'string') return;
  if (expression[START_VALUE] === RightParenthesis) return;

  let element = EMPTY;
  let result = [];
  let countParentheses = START_VALUE;

  for (const item of expression) {
    if (countParentheses < START_VALUE) {
      break;
    }

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

  if (countParentheses !== START_VALUE) {
    return;
  }

  result = [...result, element].filter(item => item);

  return result;
};
