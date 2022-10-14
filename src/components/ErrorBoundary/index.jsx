import React from 'react';

import PropTypes from 'prop-types';

import { ErrorText } from '@/components/ErrorBoundary/styles';
import { ErrorContainer } from '@/pages/Error404/styled';

const ERROR_TITLE = 'Something wrong!';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    throw new Error(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer id="errorContainer">
          <ErrorText>{ERROR_TITLE}</ErrorText>
        </ErrorContainer>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
