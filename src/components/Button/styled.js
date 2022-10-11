import styled from 'styled-components';

import theme from '@/theme';

export const ButtonStyled = styled.button`
  margin: ${theme.spaces[2]}px;
  padding: ${theme.spaces[5]}px;
  border: ${theme.spaces[1]}px solid ${({ theme }) => theme.buttonColor};
  border-radius: ${theme.spaces[4]}px;
  font-size: ${theme.textStyle.xl}rem;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    color: ${theme.Colors.white};
    background-color: ${theme.Colors.primary};
  }

  &:disabled {
    opacity: ${theme.opacity.opacity50};
  }
`;

export const ButtonSpanStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${theme.spaces[9]}px;
  height: ${theme.spaces[9]}px;
`;
