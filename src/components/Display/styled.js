import styled from 'styled-components';

import theme from '@/theme';

export const DisplayContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  height: ${theme.spaces[15]}px;
  border-bottom: ${theme.spaces[1]}px solid ${theme.Colors.secondaryLight};
  color: ${({ theme }) => theme.displayTextColor};
`;

export const DisplayHistory = styled.span`
  position: absolute;
  top: ${theme.spaces[0]};
  right: ${theme.spaces[0]};
  color: ${theme.Colors.secondaryLight};
  font-size: ${theme.textStyle.lg}rem;
`;

export const DisplayCurrent = styled.span`
  font-size: ${theme.textStyle.xll}rem;
`;
