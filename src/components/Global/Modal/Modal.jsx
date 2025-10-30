import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseButton, ModalContent } from './Modal.styled.js';
import { SvgIcon } from '../SvgIcon/SvgIcon.jsx';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton type="button" aria-label="close" onClick={onClose}>
          <SvgIcon w={32} h={32} icon="close" />
        </CloseButton>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
