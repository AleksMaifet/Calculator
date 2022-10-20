import React from 'react';

import PropTypes from 'prop-types';

import { ErrorText } from '@/components/ErrorBoundary/styles';
import { ERROR_TITLE } from '@/constants';
import { ErrorContainer } from '@/pages/Error404/styled';

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

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <ErrorContainer>
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
