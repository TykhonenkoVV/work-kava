import styled from '@emotion/styled';

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    right: 14px;
    top: 14px;
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow: hidden;
`;

export const UserIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
