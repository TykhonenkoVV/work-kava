import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import { CLOUD_NAME } from 'utils/GlobalUtils';

export const StyledContainer = styled(Container)`
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    position: relative;
    display: flex;
    z-index: 1;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 660px;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    flex-basis: calc(50% - 48px);
    order: ${({ styles }) => (styles === 'dark' ? 1 : 0)};
    height: 520px;
    ${({ styles }) =>
      styles === 'dark'
        ? 'padding-inline-start: 28px;'
        : 'padding-inline-end: 28px;'}
  }
  @media screen and (${({ theme }) => theme.devices.desktop}) {
  }

  &::before {
    @media screen and (${({ theme }) => theme.devices.onlymobile}) {
      display: none;
    }
    content: '';
    position: absolute;
    ${({ styles }) => (styles === 'dark' ? 'top: 191px;' : 'top: 235px;')};
    ${({ styles }) => (styles === 'dark' ? 'right: -107px' : 'left: -54px;')};
    ${({ styles }) =>
      styles === 'dark'
        ? 'width: 443px; height: 443px;'
        : 'width: 418px; height: 371px;'};
    background-image: ${({ styles }) =>
      styles === 'dark'
        ? `url(${CLOUD_NAME}decors/free.svg);`
        : `url(${CLOUD_NAME}decors/coffee.svg);`};
    background-repeat: no-repeat;
    background-size: contain;
    ${({ styles }) => styles === 'dark' && 'rotate: 348deg'};
    @media screen and (${({ theme }) => theme.devices.desktop}) {
      ${({ styles }) => (styles === 'dark' ? 'top: 232px;' : 'top: 215px;')};
      ${({ styles }) =>
        styles === 'dark' ? 'right: -252px' : 'left: -220px;'};
      ${({ styles }) =>
        styles === 'dark'
          ? 'width: 538px; height: 538px;'
          : 'width: 627px; height: 556px;'};
    }
  }
`;

export const Title = styled.h2`
  margin-block-end: 38px;
  ${({ styles }) =>
    styles === 'dark' ? 'text-align: right' : 'text-align: left'};
  font-size: 48px;
  line-height: 1;
  position: relative;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-block-end: 30px;
    font-size: 56px;
  }
`;

export const Text = styled.p`
  position: relative;
  margin-block-end: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  ${({ styles }) =>
    styles === 'dark'
      ? 'text-align:right;padding-inline-end: 27px;border-right: 5px solid;'
      : 'text-align:left;padding-inline-start: 27px;border-left: 5px solid;'};

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 20px;
    line-height: 1.8;
  }
`;

export const Picture = styled.picture`
  display: block;
  width: 358px;
  height: 238px;
  margin-block-end: 20px;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    flex-basis: calc(50% + 48px);
    order: ${({ styles }) => (styles === 'dark' ? 0 : 1)};
    width: 532px;
    height: 520px;
    margin-block-end: 0;
  }
`;
