import styled from '@emotion/styled';

export const Section = styled.footer`
  display: block;
  padding-block-start: 50px;
  padding-block-end: 50px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  font-size: 22px;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 100px 0 144px 0;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 50px;

  @media screen and (${props => props.theme.devices.tablet}) {
    text-align: start;
    width: 267px;
    margin-right: 56px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-right: 93px;
  }
`;
