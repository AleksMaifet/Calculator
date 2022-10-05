import PropTypes from 'prop-types';
import React from 'react';

import { ErrorContainer, ErrorText } from './styles';

const ERROR_TITLE = 'Something wrong!';
const ERROR_TEXT = 'May be: ';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer id="errorContainer">
          <ErrorText>{ERROR_TITLE}</ErrorText>
          <ErrorText>
            {ERROR_TEXT}
            {hasError}
          </ErrorText>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
