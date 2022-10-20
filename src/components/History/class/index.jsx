import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  HistoryContainer,
  HistoryList,
  HistoryListItem,
  HistoryTitle,
} from '@/components/History/styled';
import { HISTORY_TITLE } from '@/constants';
import { keypadHandle } from '@/utills';

class History extends PureComponent {
  render() {
    const { historyList, isShowHistory, setPressEvent } = this.props;
    return (
      <HistoryContainer>
        <HistoryTitle isOpen={isShowHistory} onClick={e => setPressEvent(e)}>
          {HISTORY_TITLE}
        </HistoryTitle>
        <HistoryList isOpen={isShowHistory}>
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
  isShowHistory: state.app.isShowHistoryList,
});

const mapDispatchToProps = dispatch => ({
  setPressEvent: event => {
    keypadHandle(event, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

History.propTypes = {
  historyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  isShowHistory: PropTypes.bool.isRequired,
  setPressEvent: PropTypes.func.isRequired,
};
