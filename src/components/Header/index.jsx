import React from 'react';

import { headerLinks } from './links';
import { HeaderTitle, HeaderWrapper, Navigation, StyledNavLink } from './styled';

const HEADER_TITLE = 'Calculator';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{HEADER_TITLE}</HeaderTitle>
      <Navigation>
        {headerLinks.map(({ name, link }) => {
          return (
            <StyledNavLink to={link} key={name} end>
              {name}
            </StyledNavLink>
          );
        })}
      </Navigation>
    </HeaderWrapper>
  );
};
