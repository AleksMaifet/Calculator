import styled from 'styled-components';

import theme from '@/theme';

export const KeypadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: ${theme.size.xs}px;
  width: ${theme.size.max}%;
`;

export const KeypadRow = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const KeypadColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
