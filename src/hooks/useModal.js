import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    workplace: false,
    'meeting-room': false,
    workshop: false,
    langMenu: false,
    auth: false,
    profile: false
  });

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    const values = Object.values(isModalOpen);
    const isOpen = values.some(val => val === true);
    if (isOpen === true) {
      document.body.style.paddingInlineEnd = `${getScrollbarWidth()}px`;
      document.body.style.overflow = 'hidden';
    }
    if (isOpen === false) {
      document.body.style.paddingInlineEnd = 0;
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  const openModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: true });
  };
  const closeModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: false });
  };
  const toggleModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: !isModalOpen[id] });
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
