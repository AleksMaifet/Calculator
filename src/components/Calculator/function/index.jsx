import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CalculatorContainer, CalculatorPanel } from '@/components/Calculator/styled';
import { Display } from '@/components/Display/function';
import { History } from '@/components/History/function';
import { Keypad } from '@/components/Keypad/function';
import { selectGetExpression, selectGetHistoryList, selectGetPrevValue } from '@/store';
import { keypadHandle } from '@/utills';

export const CalculatorComponent = () => {
  const dispatch = useDispatch();

  const expression = useSelector(selectGetExpression);
  const prevValue = useSelector(selectGetPrevValue);
  const history = useSelector(selectGetHistoryList);

  const setPressEvent = useCallback(
    event => {
      keypadHandle(event, dispatch);
    },
    [dispatch],
  );

  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display display={expression} preDisplay={prevValue} />
        <Keypad onPressHandle={setPressEvent} />
      </CalculatorPanel>
      <History historyList={history} />
    </CalculatorContainer>
  );
};
