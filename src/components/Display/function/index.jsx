import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { DisplayContainer, DisplayCurrent } from '@/components/Display/styled';

export const Display = memo(({ display }) => (
  <DisplayContainer>
    <DisplayCurrent>{display}</DisplayCurrent>
  </DisplayContainer>
));

Display.propTypes = {
  display: PropTypes.string.isRequired,
};
