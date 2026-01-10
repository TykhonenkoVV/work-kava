import styled from '@emotion/styled';
import { Backdrop } from 'components/Global/Modal/Modal.styled';

//Сделать свой бекдроп
export const BackdropHeader = styled(Backdrop)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-block-start: 180px;
  padding-block-end: 50px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  background-color: ${({ theme }) => theme.colors.primary};

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

  fill: ${({ theme }) => theme.colors.white};

  transition: fill ${({ theme }) => theme.baseTransition};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;

export const SetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 32px;
  line-height: 1.25;
  fill: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
`;

export const UserBtn = styled(SetBtn)`
  margin-block-end: 16px;
  color: currentColor;
  transition: color ${({ theme }) => theme.baseTransition};
  & img {
    border: 2px solid currentColor;
  }
`;
