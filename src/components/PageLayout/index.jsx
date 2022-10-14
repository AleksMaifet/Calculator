import React from 'react';

import PropTypes from 'prop-types';

import { Header } from '@/components/Header';
import { PageLayoutContainer } from '@/components/PageLayout/styled';

export const PageLayout = ({ children }) => (
  <PageLayoutContainer>
    <Header />
    {children}
  </PageLayoutContainer>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
