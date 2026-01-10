import styled from '@emotion/styled';

export const StyledSvg = styled.svg`
  transition: fill ${({ theme }) => theme.baseTransition};
  ${({ addedStyle }) => addedStyle}
`;
