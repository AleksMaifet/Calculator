import styled from 'styled-components';

import theme from '@/theme';

export const HistoryContainer = styled.section`
  width: ${theme.spaces[4]}%;
  text-align: center;
`;

export const HistoryTitle = styled.h3`
  display: inline;
  font-size: ${theme.textStyle.md}rem;
  text-align: center;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? theme.Colors.black : theme.Colors.gray)};
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: ${theme.spaces[2]}px 0 0 ${theme.spaces[4]}px;
  opacity: ${({ isOpen }) =>
    isOpen ? theme.opacity.opacity100 : theme.opacity.opacity0};
  transition: 0.3s;
`;

export const HistoryListItem = styled.li`
  font-size: ${theme.textStyle.lg}rem;
  color: ${theme.Colors.primary};
`;
