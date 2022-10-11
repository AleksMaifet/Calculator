import styled from 'styled-components';

import theme from '@/theme';

export const OptionSelectTheme = styled.select`
  font-size: ${theme.textStyle.md}rem;
  margin: ${theme.spaces[4]}px 0;
  padding: ${theme.spaces[2]}px;
  cursor: pointer;
`;

export const OptionChangeTheme = styled.option`
  font-size: ${theme.textStyle.lg};
`;
