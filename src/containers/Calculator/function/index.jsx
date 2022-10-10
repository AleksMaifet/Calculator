import React from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import { Display } from '@/components/Display/function';
import { History } from '@/components/History/function';
import { Keypad } from '@/components/Keypad/function';

export const CalculatorComponent = () => {
  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display />
        <Keypad />
      </CalculatorPanel>
      <History />
    </CalculatorContainer>
  );
};
