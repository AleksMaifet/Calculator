import styled from 'styled-components';

import theme from '@/theme';

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  height: ${theme.spaces[14]}px;
  border-bottom: ${theme.spaces[1]}px solid ${theme.Colors.secondaryLight};
  color: ${theme.Colors.darkGray};
`;

export const DisplayHistory = styled.span`
  font-size: ${theme.textStyle.lg}rem;
`;

export const DisplayCurrent = styled.span`
  font-size: ${theme.textStyle.xll}rem;
`;
