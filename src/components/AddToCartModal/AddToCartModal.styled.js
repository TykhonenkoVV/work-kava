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

export const CounterCaption = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1;
  margin-block-end: 10px;
`;
export const Counter = styled.div`
  display: flex;
`;

export const CounterButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-start-start-radius: 50%;
  border-end-start-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  &#plus {
    border-start-start-radius: unset;
    border-end-start-radius: unset;
    border-end-end-radius: 50%;
    border-start-end-radius: 50%;
  }
  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &#plus::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 3px;
    rotate: 90deg;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const CounterContent = styled.p`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 26px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const PriceWrapper = styled.div``;

export const PriceCaption = styled(CounterCaption)``;

export const Price = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
`;
