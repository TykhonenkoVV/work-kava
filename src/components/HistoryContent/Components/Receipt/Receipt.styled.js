import styled from '@emotion/styled';

export const ReceiptWrapper = styled.ul`
  margin-block-end: 16px;
`;

export const ReceiptNumber = styled.h2`
  padding-inline-start: 16px;
  padding-block-start: 6px;
  padding-block-end: 6px;
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.whiteButtonHover};
  text-align: left;
  margin-block-end: 16px;
`;

export const ResultTitle = styled.p`
  margin-block-end: 16px;
  font-size: 24px;
  font-weight: 700;
`;
