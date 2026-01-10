import styled from '@emotion/styled';

export const ReceiptBox = styled.div`
  border-block-start: 3px solid ${({ theme }) => theme.colors.primary};
  border-block-end: 3px solid ${({ theme }) => theme.colors.primary};
  &:not(:last-child) {
    margin-block-end: 16px;
  }
`;

export const ReceiptList = styled.ul`
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

export const ReceiptDate = styled.p`
  padding-inline-start: 16px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-block-end: 16px;
`;

export const ResultTitle = styled.p`
  padding-inline-start: 16px;
  padding-block-start: 6px;
  padding-block-end: 6px;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.whiteButtonHover};
`;
