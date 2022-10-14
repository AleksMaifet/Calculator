import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Display } from '@/components/Display/function';
import { History } from '@/components/History/function';
import { Keypad } from '@/components/Keypad/function';
import { buttonValues } from '@/constants';
import { CalculatorContainer, CalculatorPanel } from '@/containers/Calculator/styled';
import { selectGetExpression, selectGetHistoryList } from '@/store';
import { keypadHandle } from '@/utills';

export const CalculatorComponent = () => {
  const dispatch = useDispatch();

  const expression = useSelector(selectGetExpression);
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
        <Display display={expression} />
        <Keypad buttonValues={buttonValues} onPressHandle={setPressEvent} />
      </CalculatorPanel>
      <History historyList={history} />
    </CalculatorContainer>
  );
};
