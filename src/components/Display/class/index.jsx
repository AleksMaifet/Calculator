import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  DisplayContainer,
  DisplayCurrent,
  DisplayHistory,
} from '@/components/Display/styled';

class Display extends PureComponent {
  render() {
    const { expression, prevNumber } = this.props;
    return (
      <DisplayContainer>
        <DisplayHistory>{expression}</DisplayHistory>
        <DisplayCurrent>{prevNumber}</DisplayCurrent>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = state => ({
  expression: state.app.expression,
  prevNumber: state.app.prevNumber,
});
export default connect(mapStateToProps)(Display);

Display.propTypes = {
  expression: PropTypes.string.isRequired,
  prevNumber: PropTypes.string.isRequired,
};
