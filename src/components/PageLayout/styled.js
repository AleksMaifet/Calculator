import styled from 'styled-components';

import theme from '@/theme';

export const PageLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.appBackgroundColor};
  min-height: ${theme.spaces[14]}vh;
  width: ${theme.spaces[14]}%;
  margin: 0 auto;
  padding-bottom: ${theme.spaces[5]}px;
`;
