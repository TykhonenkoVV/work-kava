import { useEffect, useState } from 'react';
import { Hero } from 'components/Hero/Hero';
import { useModal } from 'hooks/useModal';
import { BookForm } from 'components/BookForm/BookForm';
import { PageContent } from 'components/Global/PageContent/PageContent';
import { Modal } from 'components/Global/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectRooms } from 'store/rooms/selectors';
import { getRooms } from 'store/rooms/operations';

const Coworking = () => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  const sections = useSelector(selectRooms);

  const showBookForm = rommId => {
    const i = sections.findIndex(option => option._id === rommId);
    setSelectedRoom(sections[i]);
    openModal();
  };

  return (
    <>
      <Hero page="coworking" />
      {sections?.map((section, index) => (
        <PageContent
          key={section._id}
          id={`0${index + 1}`}
          section={section}
          page="coworking"
          styles={index % 2 !== 0 ? 'dark' : 'light'}
          showBookForm={showBookForm}
        />
      ))}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <BookForm action={closeModal} room={selectedRoom} />
        </Modal>
      )}
    </>
  );
};

export default Coworking;
