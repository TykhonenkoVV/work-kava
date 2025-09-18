import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    workplace: false,
    'meeting-room': false,
    workshop: false
  });

  useEffect(() => {
    const values = Object.values(isModalOpen);
    const isOpen = values.some(val => val === true);
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    }
    if (isOpen === false) {
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen]);

  const openModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: true });
  };
  const closeModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: false });
  };

  return {
    isModalOpen,
    openModal,
    closeModal
  };
};
