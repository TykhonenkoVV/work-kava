import styled from '@emotion/styled';

export const CartTitle = styled.h1`
  margin-block-end: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 28px;
  }
`;

export const ProductsWrapper = styled.ul`
  margin-block-end: 16px;
`;

export const ResultTitle = styled.p`
  margin-block-end: 16px;
  font-size: 24px;
  font-weight: 700;
`;

export const Img = styled.img`
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-end: 50px;
`;

export const EmptyTitle = styled.p`
  font-size: 25px;
  text-align: center;
`;
