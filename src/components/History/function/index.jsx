import React, { memo } from 'react';

import PropTypes from 'prop-types';

import {
  HistoryContainer,
  HistoryList,
  HistoryListItem,
  HistoryTitle,
} from '@/components/History/styled';

const HISTORY_TITLE = 'History';

export const History = memo(({ historyList }) => (
  <HistoryContainer>
    <HistoryTitle>{HISTORY_TITLE}</HistoryTitle>
    <HistoryList>
      {historyList.map((list, i) => (
        <HistoryListItem key={`${list + i}`}>{list}</HistoryListItem>
      ))}
    </HistoryList>
  </HistoryContainer>
));

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
