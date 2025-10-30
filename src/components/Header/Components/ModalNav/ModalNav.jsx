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
  const { isLoggedIn, user } = useAuth();
  const { locale } = user;
  const { isModalOpen, openModal, closeModal, toggleModal } = useModal();

  const handleUserButtonClick = () => {
    if (isLoggedIn) openModal('profile');
    else openModal('auth');
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
        isModalOpen={isModalOpen.langMenu}
        handleLangClick={handleLangClick}
        toggleModal={() => toggleModal('langMenu')}
      />
      {isModalOpen.auth && (
        <Modal onClose={() => closeModal('auth')}>
          <AuthFormModal action={() => closeModal('auth')} />
        </Modal>
      )}
      {isModalOpen.profile && (
        <Modal onClose={() => closeModal('profile')}>
          <Profile action={() => closeModal('profile')} />
        </Modal>
      )}
    </BackdropHeader>
  );
};
