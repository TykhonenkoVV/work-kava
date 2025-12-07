import styled from '@emotion/styled';
import { DarkSection } from 'styles/globalComponents.styled';
import { CLOUD_NAME } from 'utils/constants';

export const SectionHero = styled(DarkSection)`
  padding-block-start: 100px;
  padding-block-end: 50px;
  background-repeat: no-repeat;
  background-color: #1b253f;
  background-size: cover;
  background-position: right;
  background-image: ${({ page, sizes }) =>
    ({ theme }) =>
      theme.useWebp
        ? `linear-gradient(${theme.heroLinerGradient}), url(${CLOUD_NAME}w_${
            sizes.mobile.width / 2
          },h_${
            sizes.mobile.height / 2
          },c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
        : `linear-gradient(${theme.heroLinerGradient}), url(${CLOUD_NAME}w_${
            sizes.mobile.width / 2
          },h_${
            sizes.mobile.height / 2
          },c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: ${({ page, sizes }) =>
      ({ theme }) =>
        theme.useWebp
          ? `linear-gradient(${theme.heroLinerGradient}), url(${CLOUD_NAME}w_${sizes.mobile.width},h_${sizes.mobile.height},c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
          : `linear-gradient(${theme.heroLinerGradient}), url(${CLOUD_NAME}w_${sizes.mobile.width},h_${sizes.mobile.height},c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-block-start: 40px;
    padding-block-end: 40px;
    background-image: ${({ page, sizes }) =>
      props =>
        props.theme.useWebp
          ? `url(${CLOUD_NAME}w_${sizes.tablet.width / 2},h_${
              sizes.tablet.height / 2
            },c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
          : `url(${CLOUD_NAME}w_${sizes.tablet.width / 2},h_${
              sizes.tablet.height / 2
            },c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};

    background-size: contain;
    background-position: center;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: ${({ page, sizes }) =>
        props =>
          props.theme.useWebp
            ? `url(${CLOUD_NAME}w_${sizes.tablet.width},h_${sizes.tablet.height},c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
            : `url(${CLOUD_NAME}w_${sizes.tablet.width},h_${sizes.tablet.height},c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-block-start: 80px;
    padding-block-end: 80px;
    background-image: ${({ page, sizes }) =>
      props =>
        props.theme.useWebp
          ? `url(${CLOUD_NAME}w_${sizes.desktop.width / 2},h_${
              sizes.desktop.height / 2
            },c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
          : `url(${CLOUD_NAME}w_${sizes.desktop.width / 2},h_${
              sizes.desktop.height / 2
            },c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: ${({ page, sizes }) =>
        props =>
          props.theme.useWebp
            ? `url(${CLOUD_NAME}w_${sizes.desktop.width},h_${sizes.desktop.height},c_fill/v1/workkava/${page}/hero/webp/${page}.webp)`
            : `url(${CLOUD_NAME}w_${sizes.desktop.width},h_${sizes.desktop.height},c_fill/v1/workkava/${page}/hero/jpeg/${page}.jpg)`};
    }
  }
`;

export const TextContainer = styled.div`
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 520px;
    padding: 40px 24px;
    padding-block-start: 40px;
    padding-block-end: 40px;
    padding-inline-start: 28px;
    padding-inline-end: 28px;
    margin-inline-start: -28px;
    background-color: rgba(27, 37, 63, 0.67);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 764px;
    margin-inline-start: -138px;
    padding-inline-start: 138px;
    padding-inline-end: 52px;
    padding-block-start: 50px;
    padding-block-end: 50px;
  }
`;

export const MainText = styled.h1`
  margin-block-end: 40px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.6;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 40px;
    line-height: 1.2;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 50px;
    margin-block-end: 68px;
  }
`;

export const DescrText = styled.p`
  position: relative;
  margin-block-end: 118px;
  padding-inline-start: 32px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 412px;
    margin-block-end: 40px;
    padding-inline-start: 40px;
    font-size: 20px;
    line-height: 1.8;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 418px;
    height: 182px;
    margin-block-end: 50px;
    font-size: 26px;
    line-height: 1.4;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #fff;
  }
`;
