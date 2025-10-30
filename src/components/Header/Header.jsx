import {
  ContainerHeader,
  CartButton,
  StyledHeader,
  UserButton,
  HederLogo,
  BurgerButton
} from './Header.styled';
import { useState } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { Navigation } from './Components/Navigation/Navigation';
import { SettingsWrapper } from './Components/SettingsWrapper/SettingsWrapper';
import { ModalNav } from './Components/ModalNav/ModalNav';
import { LangBlock } from './Components/LangBlock/LangBlock';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { Modal } from 'components/Global/Modal/Modal';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { Profile } from './Profile/Profile';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { isModalOpen, closeModal, openModal } = useModal();
  const [modalHeader, setModalHeader] = useState(false);

  const windowWidth = useWindowWidth();

  const handleOpenModal = () => {
    setModalHeader(true);
  };

  const handleClosedModal = () => {
    setModalHeader(false);
  };

  const handleCartButtonClick = () => {
    if (isLoggedIn) console.log('Додати логіку');
    else openModal('auth');
  };

  const handleUserButtonClick = () => {
    if (isLoggedIn) openModal('profile');
    else openModal('auth');
  };

  return (
    <StyledHeader>
      <ContainerHeader>
        <HederLogo to="/" aria-label="Home">
          <SvgIcon
            w={201}
            h={46}
            icon={'logo'}
            aria-label="logotype work kava, go home"
          />
        </HederLogo>
        {windowWidth >= 1024 ? (
          <>
            <Navigation />
            <SettingsWrapper>
              <LangBlock />
              <CartButton
                type="button"
                aria-label="cart"
                onClick={handleCartButtonClick}
              >
                <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
              </CartButton>
              <UserButton
                type="button"
                aria-label="user profile"
                onClick={handleUserButtonClick}
              >
                <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
              </UserButton>
            </SettingsWrapper>
          </>
        ) : (
          <>
            <CartButton
              type="button"
              aria-label="cart"
              onClick={handleCartButtonClick}
            >
              <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
            </CartButton>
            <BurgerButton
              type="button"
              onClick={handleOpenModal}
              aria-label="menu"
            >
              <SvgIcon w={36} h={36} icon={'burger'} />
            </BurgerButton>
          </>
        )}
      </ContainerHeader>
      {modalHeader && <ModalNav action={handleClosedModal} />}
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
    </StyledHeader>
  );
};
