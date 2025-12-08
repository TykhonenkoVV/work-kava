import {
  ContainerHeader,
  CartButton,
  StyledHeader,
  UserButton,
  HederLogo,
  BurgerButton,
  Count
} from './Header.styled';
import { useState } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { useModal } from 'hooks/useModal';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { Navigation } from './Components/Navigation/Navigation';
import { SettingsWrapper } from './Components/SettingsWrapper/SettingsWrapper';
import { ModalNav } from './Components/ModalNav/ModalNav';
import { LangBlock } from './Components/LangBlock/LangBlock';
import { Modal } from 'components/Global/Modal/Modal';
import { Profile } from './Profile/Profile';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectCart } from 'store/cart/selectors';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const cart = useSelector(selectCart);

  const {
    isModalOpen: isAuthModalOpen,
    closeModal: closeAuthModal,
    openModal: openAuthModal
  } = useModal();
  const {
    isModalOpen: isProfileModalOpen,
    closeModal: closProfileModal,
    openModal: openProfileModal
  } = useModal();
  const [modalHeader, setModalHeader] = useState(false);

  const windowWidth = useWindowWidth();

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  const handleOpenModal = () => {
    setModalHeader(true);
    document.body.style.paddingInlineEnd = `${getScrollbarWidth()}px`;
    document.body.style.overflow = 'hidden';
  };

  const handleClosedModal = () => {
    setModalHeader(false);
    document.body.style.paddingInlineEnd = 0;
    document.body.style.overflow = 'visible';
  };

  const handleCartButtonClick = () => {
    if (isLoggedIn) console.log('Додати логіку');
    else openAuthModal();
  };

  const handleUserButtonClick = () => {
    if (isLoggedIn) openProfileModal();
    else openAuthModal();
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
                {cart?.length > 0 && <Count>{cart.length}</Count>}
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
      {isAuthModalOpen && (
        <Modal onClose={closeAuthModal}>
          <AuthFormModal action={closeAuthModal} />
        </Modal>
      )}
      {isProfileModalOpen && (
        <Modal onClose={closProfileModal}>
          <Profile action={closProfileModal} isProfileModalOpen />
        </Modal>
      )}
    </StyledHeader>
  );
};
