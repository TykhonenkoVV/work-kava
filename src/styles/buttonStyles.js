import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 80px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  z-index: 2;
`;

export const BlueButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  transition: background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.darkButtonHover};
  }
`;

export const WhiteButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};

  transition: background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.whiteButtonHover};
  }
`;
