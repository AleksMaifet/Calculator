import React from 'react';

import PropTypes from 'prop-types';

import { ButtonSpanStyled, ButtonStyled } from '@/components/Button/styled';

export const Button = React.memo(({ value }) => (
  <ButtonStyled>
    <ButtonSpanStyled>{value}</ButtonSpanStyled>
  </ButtonStyled>
));

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
