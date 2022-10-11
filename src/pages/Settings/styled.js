import styled from 'styled-components';

import theme from '@/theme';

export const SettingsContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SettingsContext = styled.section`
  display: flex;
  justify-content: space-around;
  width: ${theme.size.xs}px;
`;

export const SettingsButton = styled.button`
  font-size: ${theme.textStyle.md}rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${theme.Colors.white};
  }
`;

export const SettingsTitle = styled.h1`
  font-size: ${theme.textStyle.xl}rem;
`;
