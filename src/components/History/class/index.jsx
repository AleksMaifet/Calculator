import React from 'react';

import { HistoryContainer, HistoryList, HistoryTitle } from '../styled';

const HISTORY_TITLE = 'History';

class History extends React.Component {
  render() {
    return (
      <HistoryContainer>
        <HistoryTitle>{HISTORY_TITLE}</HistoryTitle>
        <HistoryList>List</HistoryList>
      </HistoryContainer>
    );
  }
}

export default History;
