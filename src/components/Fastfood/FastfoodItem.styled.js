import styled from '@emotion/styled';

export const DishTitle = styled.h3`
  position: relative;
  z-index: 2;
  margin-right: -31px;
  padding: 11px 31px 11px 0;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-align: right;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.lightBlue};
  border-top-left-radius: 49px;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-right: -20px;
    padding: 5px 20px 5px 0;
    font-size: 30px;
    border-top-left-radius: 40px;
  }
`;

export const ImageWrapper = styled.picture`
  position: relative;
  z-index: 2;
  display: block;
  width: 304px;
  height: 186px;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 262px;
    height: 121px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 320px;
    height: 162px;
  }
`;

export const DishImage = styled.img`
  position: absolute;
`;

export const PriceWrapper = styled.div`
  margin-top: -68px;
  padding: 12px;
  border: 4px solid ${props => props.theme.colors.primary};
  border-bottom-right-radius: 49px;

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 338px;
    margin-top: -53px;
    padding-bottom: 0;
    border-bottom-right-radius: 40px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    height: 406px;
    margin-top: -62px;
    padding-left: 16px;
    padding-top: 16px;
    padding-right: 16px;
  }
`;

export const PriceColumnWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 22px;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 16px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    column-gap: 20px;
  }
`;

export const PriceColumn = styled.div`
  flex-basis: calc((100% - 16px) / 2);
  padding-top: 52px;
  padding-bottom: 30px;
  background-color: ${props => props.theme.colors.price_bgr};
  ${props =>
    props.isOdd
      ? 'border-bottom-left-radius: 30px;'
      : 'border-bottom-right-radius: 30px;'}
  @media screen and (${props => props.theme.devices.desktop}) {
    flex-basis: calc((100% - 20px) / 2);
    padding-top: 56px;
  }
`;

export const PriceText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 28px;
  }
`;

export const Price = styled.p`
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 36px;
  }
`;

export const IngreientsBtn = styled.button`
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  padding: 10px 34px;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
`;

export const Ingredsents = styled.p`
  font-size: 16px;
  line-height: 1.2;
  text-align: left;
  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
`;
