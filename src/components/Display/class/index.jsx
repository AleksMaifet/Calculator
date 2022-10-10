import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DisplayContainer, DisplayCurrent } from '../styled';

class Display extends React.Component {
  render() {
    const { expression } = this.props;
    return (
      <DisplayContainer>
        <DisplayCurrent>{expression}</DisplayCurrent>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    expression: state.app.expression,
  };
};
export default connect(mapStateToProps)(Display);

Display.propTypes = {
  expression: PropTypes.string,
};
