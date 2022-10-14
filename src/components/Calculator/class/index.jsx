import React, { PureComponent } from 'react';

import { CalculatorContainer, CalculatorPanel } from '../styled';

import Display from '@/components/Display/class';
import History from '@/components/History/class';
import Keypad from '@/components/Keypad/class';

class CalculatorComponent extends PureComponent {
  render() {
    return (
      <CalculatorContainer>
        <CalculatorPanel>
          <Display />
          <Keypad />
        </CalculatorPanel>
        <History />
      </CalculatorContainer>
    );
  }
}

export default CalculatorComponent;
