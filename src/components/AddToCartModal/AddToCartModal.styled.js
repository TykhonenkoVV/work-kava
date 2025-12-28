import styled from '@emotion/styled';

export const Caption = styled.p`
  margin-block-end: 16px;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

export const Title = styled.h1`
  margin-block-end: 24px;
  font-size: 24px;
  line-height: 1;
  text-align: center;
`;

export const CardWraper = styled.div`
  display: flex;
  margin-block-end: 24px;
`;

export const Picture = styled.picture`
  margin-inline-end: 24px;
`;

export const Img = styled.img`
  display: block;
  width: 235px;
  height: 130px;
  object-fit: cover;
  background-color: ${({ color }) => color};
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CounterWrapper = styled.div`
  width: 100%;
  margin-block-end: auto;
`;

export const AddToCartCaption = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1;
  margin-block-end: 10px;
`;

export const Price = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
`;
