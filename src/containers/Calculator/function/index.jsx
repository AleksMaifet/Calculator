import React, { useState } from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import { Display } from '@/components/Display/function';
import { History } from '@/components/History/function';
import { Keypad } from '@/components/Keypad/function';

export const CalculatorComponent = () => {
  const [value, setValue] = useState();
  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display value={value} />
        <Keypad onPressEvent={setValue} />
      </CalculatorPanel>
      <History />
    </CalculatorContainer>
  );
};
