import React, { useState } from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import { Display } from '@/components/Display/function';
import { History } from '@/components/History/function';
import { Keypad } from '@/components/Keypad/function';
import ReversePolish from '@/helpers/reversePolish';

export const CalculatorComponent = () => {
  const [expression, setExpression] = useState('');

  const changeOperator = (value, lastChar) => {
    if (value === lastChar) return;
    setExpression(prevState => {
      return prevState.slice(0, -1) + value;
    });
  };

  const onPressEvent = value => {
    if (typeof value !== 'string') return;
    const lastChar = expression.at(-1);

    const regExpression = /[-+./*%]/g;

    const isItOperatorChange =
      lastChar && lastChar.match(regExpression) && value.match(regExpression);

    if (isItOperatorChange) {
      changeOperator(value, lastChar);
      return;
    }

    if (value === '=') {
      ReversePolish(expression);
      return;
    }

    setExpression(prev => prev + value);
  };
  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display expression={expression} />
        <Keypad onPressEvent={onPressEvent} />
      </CalculatorPanel>
      <History />
    </CalculatorContainer>
  );
};
