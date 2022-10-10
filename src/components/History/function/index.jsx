import React from 'react';

import { useSelector } from 'react-redux';

import { HistoryContainer, HistoryList, HistoryListItem, HistoryTitle } from '../styled';

import { selectGetHistoryList } from '@/store';

const HISTORY_TITLE = 'History';

export const History = () => {
  const historyList = useSelector(selectGetHistoryList);

  return (
    <HistoryContainer>
      <HistoryTitle>{HISTORY_TITLE}</HistoryTitle>
      <HistoryList>
        {historyList.map((list, i) => {
          return <HistoryListItem key={list + i}>{list}</HistoryListItem>;
        })}
      </HistoryList>
    </HistoryContainer>
  );
};
