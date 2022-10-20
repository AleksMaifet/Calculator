import React, { memo } from 'react';

import PropTypes from 'prop-types';

import {
  DisplayContainer,
  DisplayCurrent,
  DisplayHistory,
} from '@/components/Display/styled';

export const Display = memo(({ display, preDisplay }) => (
  <DisplayContainer>
    <DisplayHistory>{display}</DisplayHistory>
    <DisplayCurrent>{preDisplay}</DisplayCurrent>
  </DisplayContainer>
));

Display.propTypes = {
  display: PropTypes.string.isRequired,
  preDisplay: PropTypes.string.isRequired,
};
