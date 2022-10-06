import React from 'react';

import { KeypadColumn, KeypadContainer, KeypadRow } from '../styled';

import { Button } from '@/components';
import { buttonValues } from '@/constants';

export const Keypad = React.memo(() => {
  return (
    <KeypadContainer>
      {buttonValues.map((rows, index) => (
        <KeypadRow key={index}>
          {rows.map(({ id, value }) => (
            <KeypadColumn key={value}>
              <Button value={value} />
            </KeypadColumn>
          ))}
        </KeypadRow>
      ))}
    </KeypadContainer>
  );
});
