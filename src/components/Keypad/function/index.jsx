import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { KeypadContainer, KeypadRow } from '../styled';

import { Button } from '@/components/Button/function';

export const Keypad = memo(({ buttonValues, onPressHandle }) => {
  return (
    <KeypadContainer onClick={e => onPressHandle(e)}>
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

Keypad.propTypes = {
  buttonValues: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ),
  ).isRequired,
  onPressHandle: PropTypes.func.isRequired,
};
