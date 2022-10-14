import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  HistoryContainer,
  HistoryList,
  HistoryListItem,
  HistoryTitle,
} from '@/components/History/styled';

const HISTORY_TITLE = 'History';

class History extends PureComponent {
  render() {
    const { historyList } = this.props;
    return (
      <HistoryContainer>
        <HistoryTitle>{HISTORY_TITLE}</HistoryTitle>
        <HistoryList>
          {historyList.map((list, i) => (
            <HistoryListItem key={`${i + list}`}>{list}</HistoryListItem>
          ))}
        </HistoryList>
      </HistoryContainer>
    );
  }
}

const mapStateToProps = state => ({
  historyList: state.app.historyList,
});
export default connect(mapStateToProps)(History);

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
