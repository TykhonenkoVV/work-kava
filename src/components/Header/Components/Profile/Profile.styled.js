import styled from '@emotion/styled';

export const ButtonLogOut = styled.button`
  order: ${({ jsOrder }) => jsOrder};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-start: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
  fill: currentColor;
`;
