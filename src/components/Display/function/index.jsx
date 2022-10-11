import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { DisplayContainer, DisplayCurrent } from '../styled';

export const Display = memo(({ display }) => {
  return (
    <DisplayContainer>
      <DisplayCurrent>{display}</DisplayCurrent>
    </DisplayContainer>
  );
});

Display.propTypes = {
  display: PropTypes.string.isRequired,
};
