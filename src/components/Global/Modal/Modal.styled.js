import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backdrop};
  z-index: 3;
  box-sizing: border-box;

  animation: ${({ theme }) => theme.baseTransition} alternate backdrop;

  @keyframes backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 358px;
  max-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-block-start: 60px;
  padding-block-end: 60px;
  padding-inline-start: 28px;
  padding-inline-end: 28px;
  overflow: auto;

  animation: ${({ theme }) => theme.baseTransition} alternate modal-content;

  @keyframes modal-content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 500px;
    padding-inline-start: 54px;
    padding-inline-end: 54px;
  }
`;

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
