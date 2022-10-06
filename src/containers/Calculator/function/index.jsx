import React from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import { Display, History, Keypad } from '@/components';

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
