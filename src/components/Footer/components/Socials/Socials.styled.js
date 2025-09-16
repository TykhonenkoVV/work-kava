import styled from '@emotion/styled';

export const Icons = styled.div`
  display: block;
  margin-block-end: 50px;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    display: flex;
    flex-direction: column;
    margin-block-end: 0;
  }
`;

export const Title = styled.p`
  line-height: 1;
  margin-block-end: 26px;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-block-end: 36px;
    text-align: start;
    font-size: 23px;
    line-height: 2;
  }
`;

export const IconsBox = styled.div`
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    flex-grow: 1;
    padding-inline-start: 19px;
    margin-right: 35px;
    border-inline-start: 5px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (${({ theme }) => theme.devices.desktop}) {
    margin-right: 94px;
  }
`;
