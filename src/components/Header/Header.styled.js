import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from 'styles/globalComponents.styled';
import { CLOUD_NAME } from 'utils/GlobalUtils';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const HederLogo = styled(Link)`
  display: flex;
  margin-inline-end: auto;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-inline-end: 24px;
  }
  @media screen and (${({ theme }) => theme.devices.desktop}) {
    margin-inline-end: 50px;
  }
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.sizes.mobile}px;
`;

export const LangButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-image: url('${CLOUD_NAME}/flags/flag-uk.jpg');
  background-position: center;
  transition: border-color ${({ theme }) => theme.baseTransition};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;

export const CartButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  transition: fill ${({ theme }) => theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
  }

  @media screen and (${({ theme }) => theme.devices.onlymobile}) {
    margin-right: 16px;
  }
`;

export const UserButton = styled.button`
  width: 40px;
  height: 40px;
  fill: ${({ theme }) => theme.colors.white};
  transition: fill ${({ theme }) => theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;

export const ButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  transition: fill ${({ theme }) => theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;
