import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { HistoryContainer, HistoryList, HistoryListItem, HistoryTitle } from '../styled';

const HISTORY_TITLE = 'History';

class History extends React.Component {
  render() {
    const { historyList } = this.props;
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
  }
}

const mapStateToProps = state => {
  return {
    historyList: state.app.historyList,
  };
};
export default connect(mapStateToProps)(History);

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string),
};
