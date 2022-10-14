import React from 'react';

import { headerLinks } from '@/components/Header/links';
import {
  HeaderTitle,
  HeaderWrapper,
  Navigation,
  StyledNavLink,
} from '@/components/Header/styled';

const HEADER_TITLE = 'Calculator';

export const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
    <Navigation>
      {headerLinks.map(({ name, link }) => (
        <StyledNavLink to={link} key={name} end>
          {name}
        </StyledNavLink>
      ))}
    </Navigation>
  </HeaderWrapper>
);
