import React, { memo } from 'react';

import PropTypes from 'prop-types';

import {
  HistoryContainer,
  HistoryList,
  HistoryListItem,
  HistoryTitle,
} from '@/components/History/styled';
import { HISTORY_TITLE } from '@/constants';

export const History = memo(({ historyList, isShowHistory, onPressHandle }) => (
  <HistoryContainer>
    <HistoryTitle isOpen={isShowHistory} onClick={e => onPressHandle(e)}>
      {HISTORY_TITLE}
    </HistoryTitle>
    <HistoryList isOpen={isShowHistory}>
      {historyList.map((list, i) => (
        <HistoryListItem key={`${list + i}`}>{list}</HistoryListItem>
      ))}
    </HistoryList>
  </HistoryContainer>
));

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  isShowHistory: PropTypes.bool.isRequired,
};
