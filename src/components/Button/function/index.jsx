import React from 'react';

import PropTypes from 'prop-types';

import { ButtonSpanStyled, ButtonStyled } from '../styled';

export const Button = ({ value }) => {
  return (
    <ButtonStyled>
      <ButtonSpanStyled>{value}</ButtonSpanStyled>
    </ButtonStyled>
  );
};

Button.propTypes = {
  value: PropTypes.string,
};
