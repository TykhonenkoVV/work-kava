import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from 'styles/globalComponents.styled';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

export const HederLogo = styled(Link)`
  fill: currentColor;
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

export const CartButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  fill: currentColor;
  border: 2px solid currentColor;
  transition: color ${({ theme }) => theme.baseTransition};

  &:hover {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }

  @media screen and (${({ theme }) => theme.devices.onlymobile}) {
    margin-right: 16px;
  }
`;

export const Count = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: red;
  border-radius: 50%;
`;

export const UserButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  transition: color ${({ theme }) => theme.baseTransition};

  &:hover {
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;

export const BurgerButton = styled.button`
  width: 40px;
  height: 40px;
  fill: currentColor;
  border: 2px solid currentColor;
  transition: color ${({ theme }) => theme.baseTransition};

  &:hover {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;
