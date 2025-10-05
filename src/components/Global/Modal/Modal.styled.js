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
  width: 100%;
  width: 358px;
  background: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, -50%);
  padding-block-start: 60px;
  padding-block-end: 60px;
  padding-inline-start: 28px;
  padding-inline-end: 28px;

  animation: ${({ theme }) => theme.baseTransition} alternate modal-content;

  @keyframes modal-content {
    from {
      transform: translate(-50%, 50%);
    }
    to {
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 500px;
    padding-inline-start: 54px;
    padding-inline-end: 54px;
  }
`;
