import PropTypes from 'prop-types';
import React from 'react';

import { Header } from '@/components';

import { PageLayoutContainer } from './styled';

export const PageLayout = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Header />
      {children}
    </PageLayoutContainer>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};
