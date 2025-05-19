import styled from '@emotion/styled';
import { Backdrop } from 'components/Modal/Modal.styled';

export const BackdropHeader = styled(Backdrop)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 180px 0 50px 0;

  background-color: ${props => props.theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -45px;

    width: 236px;
    height: 178px;

    background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg');
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;

  fill: ${props => props.theme.colors.white};

  transition: fill ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.whiteButtonHover};
  }
`;

export const SetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  fill: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
`;

export const UserBtn = styled(SetBtn)`
  margin-bottom: 16px;
  transition: fill ${props => props.theme.baseTransition},
    color ${props => props.theme.baseTransition};
  &:hover {
    fill: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.whiteButtonHover};
  }
`;

export const LangBtn = styled(SetBtn)`
  margin-top: auto;
  transition: color ${props => props.theme.baseTransition};
  &:hover {
    border-color: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.whiteButtonHover};
  }
  & img {
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: 10px;
    transition: border-color ${props => props.theme.baseTransition};
  }
  &:hover img {
    border-color: ${props => props.theme.colors.whiteButtonHover};
  }
`;
