import React from 'react';

import { DisplayContainer, DisplayCurrent, DisplayHistory } from '../styled';

class Display extends React.Component {
  render() {
    return (
      <DisplayContainer>
        <DisplayHistory>History</DisplayHistory>
        <DisplayCurrent>Current</DisplayCurrent>
      </DisplayContainer>
    );
  }
}

export default Display;
