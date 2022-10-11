import styled from 'styled-components';

import theme from '@/theme';

export const PageLayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.appBackgroundColor};
  height: ${theme.spaces[14]}%;
  width: ${theme.spaces[14]}%;
  margin: 0 auto;
`;
