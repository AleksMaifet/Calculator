import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { KeypadContainer, KeypadRow } from '../styled';

import Button from '@/components/Button/class';
import { buttonValues } from '@/constants';
import { keypadHandle } from '@/utills';

class Keypad extends React.Component {
  render() {
    const { setPressEvent } = this.props;
    return (
      <KeypadContainer onClick={setPressEvent}>
        {buttonValues.map((rows, index) => (
          <KeypadRow key={index}>
            {rows.map(({ id, value }) => (
              <Button key={id} value={value} />
            ))}
          </KeypadRow>
        ))}
      </KeypadContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPressEvent: event => {
      keypadHandle(event, dispatch);
    },
  };
};

export default connect(null, mapDispatchToProps)(Keypad);

Keypad.propTypes = {
  setPressEvent: PropTypes.func.isRequired,
};
