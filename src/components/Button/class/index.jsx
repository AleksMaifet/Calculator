import React from 'react';

import PropTypes from 'prop-types';

import { ButtonSpanStyled, ButtonStyled } from '../styled';

class Button extends React.Component {
  render() {
    return (
      <ButtonStyled>
        <ButtonSpanStyled>{this.props.value}</ButtonSpanStyled>
      </ButtonStyled>
    );
  }
}

export default React.memo(Button);

Button.propTypes = {
  value: PropTypes.string,
};
