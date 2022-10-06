import React from 'react';

import { HistoryContainer, HistoryList, HistoryTitle } from '../styled';

const HISTORY_TITLE = 'History';

export const History = () => {
  return (
    <HistoryContainer>
      <HistoryTitle>{HISTORY_TITLE}</HistoryTitle>
      <HistoryList>List</HistoryList>
    </HistoryContainer>
  );
};
