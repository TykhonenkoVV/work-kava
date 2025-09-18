import styled from '@emotion/styled';
import { Container } from 'styles/globalComponents.styled';

export const Section = styled.footer`
  display: block;
  padding-block-start: 50px;
  padding-block-end: 50px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  font-size: 22px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  @media screen and (${({ theme }) => theme.devices.desktop}) {
    padding-block-start: 100px;
    padding-block-end: 100px;
  }
`;

export const FooterContainer = styled(Container)`
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    display: flex;
    gap: 35px;
  }
  @media screen and (${({ theme }) => theme.devices.desktop}) {
    gap: 79px;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 50px;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    text-align: start;
    width: 302px;
    margin-block-end: 0;
  }
`;
