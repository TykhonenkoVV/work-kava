import styled from '@emotion/styled';
import { Container } from 'components/App.styled';
import img from '../../images/flag-uk.jpg';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;

  background-color: ${props => props.theme.colors.headerBackground};
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: ${props => props.theme.sizes.mobile}px;
`;

export const LangButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-image: url('${img}');
  background-position: center;
  transition: border-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.whiteButtonHover};
  }
`;

export const CartButton = styled.button`
  width: 40px;
  height: 40px;
  fill: #fff;
  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.whiteButtonHover};
  }

  @media screen and (${props => props.theme.devices.onlymobile}) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

export const UserButton = styled.button`
  width: 40px;
  height: 40px;
  fill: #fff;
  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.whiteButtonHover};
  }
`;

export const ButtonStyled = styled.button`
  width: 32px;
  height: 32px;
  fill: ${props => props.theme.colors.white};
  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.whiteButtonHover};
  }
`;
