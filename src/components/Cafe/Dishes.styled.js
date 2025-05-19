import styled from '@emotion/styled';
import { CloudName } from 'utils/GlobalUtils';

export const Title = styled.h2`
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  font-family: Inter;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  overflow: hidden;
  margin-left: -24px;
  padding-left: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 60px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 100px;
    margin-left: -138px;
    padding-left: 138px;
    font-size: 70px;
  }

  color: ${props =>
    props.styles === 'light'
      ? props.theme.colors.white
      : props.styles === 'dark'
      ? props.theme.colors.primary
      : 'inherit'};

  &::first-letter {
    color: ${props =>
      props.styles === 'light'
        ? props.theme.colors.primary
        : props.styles === 'dark'
        ? props.theme.colors.white
        : 'inherit'};
    background-color: ${props =>
      props.styles === 'light'
        ? props.theme.colors.accent
        : props.theme.colors.lightBlue};
    margin-left: -24px;
    padding-left: 24px;

    @media screen and (${props => props.theme.devices.desktop}) {
      margin-left: -138px;
      padding-left: 138px;
    }
  }
`;

export const DishesList = styled.ul`
  position: relative;
  text-align: left;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 50px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    column-gap: 20px;
    row-gap: 50px;
  }
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    right: -14px;
    top: -156px;

    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    ${props =>
      props.name === 'coffee-classic'
        ? `width: 94px; height: 85px; fill: ${props.theme.colors.darkBeige}; background-image: url(${CloudName}decors/coffee_bean_7E7262.svg);`
        : props.name === 'coffee-with-milk'
        ? `width: 94px; height: 85px; fill: ${props.theme.colors.beige}; background-image: url(${CloudName}decors/coffee_bean_E2D0AE.svg);`
        : `width: 94px; height: 95px;  fill: ${props.theme.colors.darkBeige}; background-image: url(${CloudName}decors/dots_7E7262.svg);`};

    @media screen and (${props => props.theme.devices.tablet}) {
      top: -166px;
      right: 0;
      ${props =>
        props.name === 'coffee-classic'
          ? ` width: 186px; height: 166px; `
          : props.name === 'coffee-with-milk'
          ? ` width: 186px; height: 166px; `
          : ` width: 190px; height: 190px; `};
    }

    @media screen and (${props => props.theme.devices.desktop}) {
      right: -114px;
      top: -266px;
      ${props =>
        props.name === 'desserts'
          ? ` width: 250px; height: 250px; `
          : ` width: 313px; height: 281px; `}
    }
  }
`;
