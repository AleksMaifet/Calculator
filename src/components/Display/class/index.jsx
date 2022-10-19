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
    const { expression } = this.props;
    return (
      <DisplayContainer>
        <DisplayHistory>{expression}</DisplayHistory>
        <DisplayCurrent>{expression}</DisplayCurrent>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = state => ({
  expression: state.app.expression,
});
export default connect(mapStateToProps)(Display);

Display.propTypes = {
  expression: PropTypes.string.isRequired,
};
