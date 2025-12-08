import { BackdropHeader, CloseButton, UserBtn } from './ModalNav.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';
import { LangBlock } from '../LangBlock/LangBlock';
import { lang } from 'lang/lang';
import { useModal } from 'hooks/useModal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { Modal } from 'components/Global/Modal/Modal';
import { useAuth } from 'hooks/useAuth';
import { Profile } from 'components/Header/Profile/Profile';

export const ModalNav = ({ action, handleLangClick }) => {
  const { isLoggedIn, locale } = useAuth();
  const {
    isModalOpen: isAuthModalOpen,
    openModal: openAuthModal,
    closeModal: closeAuthModal
  } = useModal();

  const {
    isModalOpen: isProfileOpen,
    openModal: openProfileModal,
    closeModal: closeProfileModal
  } = useModal();

  const { isModalOpen: isLangMenuOpen, toggleModal: toggleLangMenuModal } =
    useModal();

  const handleUserButtonClick = () => {
    if (isLoggedIn) openProfileModal();
    else openAuthModal();
  };

  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action} aria-label="close">
        <SvgIcon w={36} h={36} icon="close" />
      </CloseButton>
      <UserBtn
        type="button"
        aria-label="user profile"
        onClick={handleUserButtonClick}
      >
        <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
        {isLoggedIn ? lang[locale].user_profile : lang[locale].sign_in}
      </UserBtn>
      <Navigation action={action} />
      <LangBlock
        isModalOpen={isLangMenuOpen}
        handleLangClick={handleLangClick}
        toggleModal={toggleLangMenuModal}
      />
      {isAuthModalOpen && (
        <Modal onClose={closeAuthModal}>
          <AuthFormModal action={closeAuthModal} />
        </Modal>
      )}
      {isProfileOpen && (
        <Modal onClose={closeProfileModal}>
          <Profile action={closeProfileModal} />
        </Modal>
      )}
    </BackdropHeader>
  );
};
