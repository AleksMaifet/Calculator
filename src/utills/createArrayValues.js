import { Operators } from '@/constants';

const { Minus, Dot, RightParenthesis } = Operators;

const EMPTY = '';
const LAST_ELEMENT = -1;
const MIN_AMOUNT_NUMS = 2;

export const isEvaluateValidation = result => {
  const matches = result.match(/[0-9.,]+/g);
  if (matches && matches.length < MIN_AMOUNT_NUMS) {
    return;
  }
  return result;
};

export const createArrayValues = expression => {
  if (typeof expression !== 'string') {
    return;
  }

  let element = EMPTY;
  let result = [];

  for (const item of expression) {
    if (
      item === Minus &&
      !element.length &&
      result.at(LAST_ELEMENT) !== RightParenthesis
    ) {
      element = item;
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
