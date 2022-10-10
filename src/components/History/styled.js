import styled from 'styled-components';

import theme from '@/theme';

export const HistoryContainer = styled.section`
  width: ${theme.spaces[4]}%;
  border-left: ${theme.spaces[1]}px solid ${theme.Colors.secondaryLight};
`;

export const HistoryTitle = styled.h3`
  font-size: ${theme.textStyle.md}rem;
  text-align: center;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: ${theme.spaces[2]}px 0 0 ${theme.spaces[4]}px;
`;

export const HistoryListItem = styled.li`
  font-size: ${theme.textStyle.lg}rem;
  color: ${theme.Colors.primary};
`;
