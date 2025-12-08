import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    if (isModalOpen === true) {
      document.body.style.paddingInlineEnd = `${getScrollbarWidth()}px`;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.paddingInlineEnd = 0;
        document.body.style.overflow = 'visible';
      };
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
