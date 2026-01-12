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
  width: calc(100% - 60px);
  margin-block-end: 20px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

const DeleteButton = styled.button`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    width: 24px;
    height: 24px;
    border-width: 1px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primaryText};
  fill: currentColor;
  transition: color ${({ theme }) => theme.baseTransition};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CartDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 16px;
  right: 0;
`;

export const SizeDeleteButton = styled(DeleteButton)`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    margin-inline-start: 10px;
  }
  margin-inline-start: 16px;
`;

export const CartWrapper = styled.div`
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    display: flex;
    gap: 16px;
  }
`;

export const CartPicture = styled.picture`
  display: block;
  width: 235px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff8e7;
  margin-block-end: 16px;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 268px;
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

export const PriceTitleWrapper = styled.div`
  gap: 10px;
  display: flex;
`;

export const PriceTitle = styled.p`
  flex-grow: 1;
  font-size: 16px;
  padding-inline-start: 5px;
  padding-block-start: 5px;
  padding-inline-end: 5px;
  padding-block-end: 5px;
  background-color: ${({ theme }) => theme.colors.whiteButtonHover};
`;

export const CountTitle = styled.p`
  width: 74px;
  padding-inline-start: 5px;
  padding-block-start: 5px;
  padding-inline-end: 5px;
  padding-block-end: 5px;
  background-color: ${({ theme }) => theme.colors.whiteButtonHover};
  &.margin {
    margin-inline-end: 46px;
  }
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 100px;
  }
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
