import React from 'react';

import { KeypadContainer, KeypadRow } from '../styled';

import { Button } from '@/components/Button/function';
import { buttonValues } from '@/constants';

export const Keypad = React.memo(({ onPressEvent }) => {
  const setPressEvent = value => {
    const target = value.target;
    if (target.tagName === 'DIV') return null;
    onPressEvent(value.target.textContent);
  };

  return (
    <KeypadContainer onClick={e => setPressEvent(e)}>
      {buttonValues.map((rows, index) => (
        <KeypadRow key={index}>
          {rows.map(({ id, value }) => (
            <Button key={id} value={value} />
          ))}
        </KeypadRow>
      ))}
    </KeypadContainer>
  );
});
