import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import { ButtonSpanStyled, ButtonStyled } from '@/components/Button/styled';

class Button extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <ButtonStyled>
        <ButtonSpanStyled>{value}</ButtonSpanStyled>
      </ButtonStyled>
    );
  }
}

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
