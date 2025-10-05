import { BackdropHeader, CloseButton, UserBtn } from './ModalNav.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { Navigation } from '../Navigation/Navigation';
import { LangBlock } from '../LangBlock/LangBlock';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { useModal } from 'hooks/useModal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { Modal } from 'components/Global/Modal/Modal';

export const ModalNav = ({ action, handleLangClick }) => {
  const { locale } = useSelector(selectUser);
  const { isModalOpen, openModal, closeModal, toggleModal } = useModal();

  return (
    <BackdropHeader>
      <CloseButton type="button" onClick={action} aria-label="close">
        <SvgIcon w={36} h={36} icon="close" />
      </CloseButton>
      <UserBtn
        type="button"
        aria-label="user profile"
        onClick={() => openModal('auth')}
      >
        <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
        {lang[locale].sign_in}
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
    </BackdropHeader>
  );
};
