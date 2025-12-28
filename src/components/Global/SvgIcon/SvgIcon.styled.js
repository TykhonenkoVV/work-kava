import styled from '@emotion/styled';

export const StyledSvg = styled.svg`
  fill: currentColor;
  transition: fill ${({ theme }) => theme.baseTransition};
  ${({ addedStyle }) => addedStyle}
`;
