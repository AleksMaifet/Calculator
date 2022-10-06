import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import theme from '@/theme';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  background-color: ${theme.Colors.pink};
`;

export const HeaderTitle = styled.h1`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.lg.fontSize}rem;
  line-height: ${theme.textStyle.lg.lineHeight}rem;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.Colors.white};
  font-size: ${theme.textStyle.lg.fontSize}rem;
  text-decoration: ${props => {
    console.log(props);
    return props.style ? isActive => (isActive ? 'underline' : 'none') : 'none';
  }};

  :nth-child(n + 2) {
    margin-left: 20px;
  }

  &:hover {
    text-decoration: underline;
  }
`;
