import styled from '@emotion/styled';

export const IngredientsList = styled.ul`
  height: 81px;
  font-size: 18px;
  line-height: 1.5;

  ${props =>
    props.isEven
      ? `
        border-right: 5px solid ${props.theme.colors.primary};
        padding-right: 10px;
      `
      : `
        border-left: 5px solid ${props.theme.colors.primary};
        padding-left: 10px;
      `};
  color: ${props => props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.tablet}) {
    height: 100px;
    grid-template-columns: calc(100% - 76px) 76px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    grid-template-columns: calc(100% - 47px) 47px;
    grid-template-rows: 21px;
    width: 141px;
    height: 124px;
    font-size: 14px;
    ${props =>
      props.styles !== 'dark'
        ? `color: ${props.theme.colors.white}; border-color: ${props.theme.colors.white}`
        : `color: ${props.theme.colors.accent}; border-color: ${props.theme.colors.accent}`};
  }
`;

export const IngredientItem = styled.li`
  display: flex;
`;

export const Item = styled.p`
  width: 59px;
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 48px;
  }
`;

export const Dots = styled.p`
  width: 23px;
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 27px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 30px;
  }
`;

export const Amount = styled.p`
  width: 56px;
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 59px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 47px;
  }
`;
