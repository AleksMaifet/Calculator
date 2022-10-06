import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: ${theme.spaces[14]}px;
  background-color: ${theme.Colors.pink};
`;

export const HeaderTitle = styled.h1`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.xl}rem;
  line-height: ${theme.textStyle.lg.lineHeight}rem;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.md}rem;

  :nth-child(n + 2) {
    margin-left: ${theme.spaces[5]}px;
  }

  &.active {
    color: ${theme.Colors.secondaryLight};
  }

  &:hover,
  &.active {
    text-decoration: underline;
  }
`;
