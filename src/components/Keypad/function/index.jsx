import React from 'react';

import { useDispatch } from 'react-redux';

import { KeypadContainer, KeypadRow } from '../styled';

import { Button } from '@/components/Button/function';
import { buttonValues } from '@/constants';
import { keypadHandle } from '@/utills';

export const Keypad = () => {
  const dispatch = useDispatch();

  const setPressEvent = event => {
    keypadHandle(event, dispatch);
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
};
