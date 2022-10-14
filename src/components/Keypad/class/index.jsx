import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@/components/Button/class';
import { KeypadContainer, KeypadRow } from '@/components/Keypad/styled';
import { buttonValues } from '@/constants';
import { keypadHandle } from '@/utills';

class Keypad extends PureComponent {
  render() {
    const { setPressEvent } = this.props;
    return (
      <KeypadContainer onClick={setPressEvent}>
        {buttonValues.map((rows, index) => (
          <KeypadRow key={`${index + rows}`}>
            {rows.map(({ id, value }) => (
              <Button key={id} value={value} />
            ))}
          </KeypadRow>
        ))}
      </KeypadContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPressEvent: event => {
    keypadHandle(event, dispatch);
  },
});

export default connect(null, mapDispatchToProps)(Keypad);

Keypad.propTypes = {
  setPressEvent: PropTypes.func.isRequired,
};
