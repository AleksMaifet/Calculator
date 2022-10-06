import React from 'react';

import { DisplayContainer, DisplayCurrent, DisplayHistory } from '../styled';

export const Display = () => {
  return (
    <DisplayContainer>
      <DisplayHistory>History</DisplayHistory>
      <DisplayCurrent>Current</DisplayCurrent>
    </DisplayContainer>
  );
};
