import React from 'react';

import PropTypes from 'prop-types';

import { ErrorContainer, ErrorText } from './styles';

const ERROR_TITLE = 'Something wrong!';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer id="errorContainer">
          <ErrorText>{ERROR_TITLE}</ErrorText>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
