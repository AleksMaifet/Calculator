import React from 'react';

import { useSelector } from 'react-redux';

import { DisplayContainer, DisplayCurrent } from '../styled';

import { selectGetExpression } from '@/store';

export const Display = () => {
  const expression = useSelector(selectGetExpression);

  return (
    <DisplayContainer>
      <DisplayCurrent>{expression}</DisplayCurrent>
    </DisplayContainer>
  );
};
