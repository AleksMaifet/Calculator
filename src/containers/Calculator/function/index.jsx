import React from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import { Display, Keypad } from '@/components';

export const CalculatorComponent = () => {
  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display />
        <Keypad />
      </CalculatorPanel>
      History
    </CalculatorContainer>
  );
};
