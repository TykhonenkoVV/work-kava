import styled from '@emotion/styled';

export const StyledProduct = styled.li`
  position: relative;
  padding-block-start: 16px;
  padding-block-end: 16px;
  border-block-start: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-block-end: 1px solid ${({ theme }) => theme.colors.primaryText};
  &:not(:last-child) {
    margin-block-end: 10px;
  }
`;

export const CartCaption = styled.p`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 24px;
    line-height: 1;
  }
  margin-block-end: 20px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

export const CartWrapper = styled.div`
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    display: flex;
    gap: 16px;
  }
`;

export const Img = styled.img`
  margin-inline-start: auto;
  margin-inline-end: auto;
  border-radius: 6px;
  background-color: #ffffff;
  margin-block-end: 16px;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-inline-start: 0;
    margin-inline-end: 0;
    margin-block-end: 0;
  }
`;

export const CartPriceBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const CartPriceWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Price = styled.p`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 14px;
    line-height: 1.7;
  }
  margin-inline-end: auto;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;
