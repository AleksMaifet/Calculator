import React from 'react';

import { DisplayContainer, DisplayCurrent, DisplayHistory } from '../styled';

export const Display = ({ expression }) => {
  return (
    <DisplayContainer>
      <DisplayHistory>History</DisplayHistory>
      <DisplayCurrent>{expression}</DisplayCurrent>
    </DisplayContainer>
  );
};
