import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { Button } from '@/components/Button/function';
import { KeypadContainer, KeypadRow } from '@/components/Keypad/styled';

export const Keypad = memo(({ buttonValues, onPressHandle }) => (
  <KeypadContainer onClick={e => onPressHandle(e)}>
    {buttonValues.map((rows, index) => (
      <KeypadRow key={`${index + rows}`}>
        {rows.map(({ id, value }) => (
          <Button key={id} value={value} />
        ))}
      </KeypadRow>
    ))}
  </KeypadContainer>
));

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
