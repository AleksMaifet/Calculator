import React from 'react';

import { DisplayContainer, DisplayCurrent, DisplayHistory } from '../styled';

export const Display = ({ value }) => {
  return (
    <DisplayContainer>
      <DisplayHistory>History</DisplayHistory>
      <DisplayCurrent>{value}</DisplayCurrent>
    </DisplayContainer>
  );
};
