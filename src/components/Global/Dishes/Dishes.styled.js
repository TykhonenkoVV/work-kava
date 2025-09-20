import styled from '@emotion/styled';
import { Container } from 'styles/globalComponents.styled';

export const DishesContainer = styled(Container)`
  @media screen and (${props => props.theme.devices.desktop}) {
    padding-inline-start: 0;
    padding-inline-end: 0;
  }
`;

export const Title = styled.h2`
  margin-block-end: 30px;
  font-size: 32px;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 60px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-block-end: 25px;
  }

  color: ${props =>
    props.styles === 'light'
      ? props.theme.colors.white
      : props.styles === 'dark'
      ? props.theme.colors.primary
      : 'inherit'};
`;

export const DishesList = styled.ul`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    column-gap: 20px;
    gap: 15px;
  }
`;
