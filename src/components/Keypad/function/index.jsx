import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { Button } from '@/components/Button/function';
import { KeypadContainer, KeypadRow } from '@/components/Keypad/styled';
import { buttonValues } from '@/constants';

export const Keypad = memo(({ onPressHandle }) => (
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
  onPressHandle: PropTypes.func.isRequired,
};
