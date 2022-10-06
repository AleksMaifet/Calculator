import React from 'react';

import { KeypadContainer, KeypadRow } from '../styled';

import Button from '@/components/Button/class';
import { buttonValues } from '@/constants';

class Keypad extends React.Component {
  render() {
    return (
      <KeypadContainer>
        {buttonValues.map((rows, index) => (
          <KeypadRow key={index}>
            {rows.map(({ id, value }) => (
              <Button key={id} value={value} />
            ))}
          </KeypadRow>
        ))}
      </KeypadContainer>
    );
  }
}

export default Keypad;
