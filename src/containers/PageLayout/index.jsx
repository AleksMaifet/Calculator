import React from 'react';

import PropTypes from 'prop-types';

import { Header } from '@/components';

export const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};
