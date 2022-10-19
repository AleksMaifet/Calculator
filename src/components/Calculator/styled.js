import styled from 'styled-components';

import theme from '@/theme';

export const CalculatorContainer = styled.main`
  display: flex;
  justify-content: center;
  padding-top: ${theme.spaces[2]}px;
`;

export const CalculatorPanel = styled.section`
  width: ${theme.spaces[9]}%;
  padding: 0 ${theme.spaces[4]}px;
  border-right: ${theme.spaces[1]}px solid ${theme.Colors.secondaryLight};
`;
