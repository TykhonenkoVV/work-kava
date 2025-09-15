import styled from '@emotion/styled';
import { CLOUD_NAME } from 'utils/GlobalUtils';

export const Title = styled.h2`
  margin-block-end: 38px;
  ${props =>
    props.styles === 'dark' ? 'text-align: right' : 'text-align: left'};
  font-size: 48px;
  line-height: 1;
  position: relative;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-block-end: 70px;
    font-size: 70px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    &::before {
      ${props =>
        props.styles === 'dark' ? 'left: -138px;' : 'right: -138px; '};
    }
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 574px;
  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 40px;
    ${props =>
      props.styles === 'dark'
        ? 'grid-template-columns: 516px 1fr; margin-left: -24px; margin-right: 0'
        : 'grid-template-columns: 1fr 516px; margin-left: 0; margin-right: -24px;'};
    padding: 0;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    ${props =>
      props.styles === 'dark'
        ? 'grid-template-columns: 818px 1fr; margin-left: -138px;'
        : 'grid-template-columns: 1fr 818px; margin-right: -138px;'};
  }

  &::before {
    @media screen and (${props => props.theme.devices.onlymobile}) {
      display: none;
    }
    content: '';
    position: absolute;
    ${props => (props.styles === 'dark' ? 'top: 191px;' : 'top: 235px;')};
    ${props => (props.styles === 'dark' ? 'right: -107px' : 'left: -54px;')};
    ${props =>
      props.styles === 'dark'
        ? 'width: 443px; height: 443px;'
        : 'width: 418px; height: 371px;'};
    background-image: ${props =>
      props.styles === 'dark'
        ? `url(${CLOUD_NAME}decors/free.svg);`
        : `url(${CLOUD_NAME}decors/coffee.svg);`};
    background-repeat: no-repeat;
    background-size: contain;
    ${props => props.styles === 'dark' && 'rotate: 348deg'};
    @media screen and (${props => props.theme.devices.desktop}) {
      ${props => (props.styles === 'dark' ? 'top: 232px;' : 'top: 215px;')};
      ${props => (props.styles === 'dark' ? 'right: -252px' : 'left: -220px;')};
      ${props =>
        props.styles === 'dark'
          ? 'width: 538px; height: 538px;'
          : 'width: 627px; height: 556px;'};
    }
  }
`;

export const Text = styled.p`
  position: relative;
  margin-block-end: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  ${props =>
    props.styles === 'dark'
      ? 'padding-inline-end: 32px; text-align:right;'
      : 'padding-inline-start: 32px; text-align:left;'};

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    ${props => (props.styles === 'dark' ? 'right: 0;  ' : 'left: 0;')};
    width: 5px;
    height: 100%;

    background-color: ${props =>
      props.styles === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.primary};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    grid-column-start: ${props => (props.styles === 'dark' ? '2' : '1')};
    font-size: 30px;
    line-height: 1.2;
    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &::before {
      height: ${props => (props.styles === 'dark' ? '216px  ' : '288px')};
    }
  }
`;

export const Picture = styled.picture`
  display: block;
  width: 358px;
  height: 238px;
  margin-block-end: 20px;
  @media screen and (${props => props.theme.devices.tablet}) {
    grid-row-end: 3;
    grid-row-start: 1;
    grid-column-start: ${props => (props.styles === 'dark' ? '1' : '2')};
    margin-block-end: 0;
  }
`;

export const StyleContainerBtn = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  @media screen and (${props => props.theme.devices.tablet}) {
    grid-column-start: ${props => (props.styles === 'dark' ? '2' : '1')};
    ${props =>
      props.styles === 'dark'
        ? 'margin-right: 0; margin-top: -29px '
        : 'margin-left: 0;'};
    margin-top: auto;
  }
`;
