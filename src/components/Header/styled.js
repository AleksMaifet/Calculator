import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${theme.spaces[5]}px 0;
  background-color: ${theme.Colors.pink};
`;

export const HeaderTitle = styled.h1`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.xl.fontSize}rem;
  line-height: ${theme.textStyle.lg.lineHeight}rem;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.lg.fontSize}rem;

  :nth-child(n + 2) {
    margin-left: ${theme.spaces[5]}px;
  }

  &.active {
    color:${theme.Colors.secondaryLight} ;
  }

  &:hover,
  &.active {
    text-decoration: underline;
  }
`;
