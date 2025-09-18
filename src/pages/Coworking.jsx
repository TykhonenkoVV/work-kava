import { useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { coworkingSections as sections } from 'utils/commonUtils';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { BookForm } from 'components/BookForm/BookForm';
import { PageContent } from 'components/PageContent/PageContent';

const Coworking = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedBookType, setSelectedBookType] = useState('');

  const showBookForm = bookType => {
    setSelectedBookType(bookType);
    openModal(bookType);
  };

  return (
    <>
      <Hero page="coworking" />
      {sections.map((section, index) => (
        <PageContent
          key={section.id}
          id={section.id}
          page="coworking"
          title={section.title}
          description={section.description}
          styles={index % 2 !== 0 ? 'dark' : 'light'}
          bookType={section.bookType}
          showBookForm={showBookForm}
        />
      ))}
      {isModalOpen[selectedBookType] && (
        <Modal onClose={() => closeModal(selectedBookType)}>
          <BookForm
            action={() => closeModal(selectedBookType)}
            bookType={selectedBookType}
          />
        </Modal>
      )}
    </>
  );
};

export default Coworking;
