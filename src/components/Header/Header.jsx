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
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectProducts } from 'store/cart/selectors';
import { Profile } from './Components/Profile/Profile';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  const products = useSelector(selectProducts);

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
    openAuthModal();
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
            w={windowWidth < 414 ? 160 : 201}
            h={windowWidth < 414 ? 37 : 46}
            icon={'logo'}
            aria-label="logotype work kava, go home"
          />
        </HederLogo>
        {windowWidth >= 1024 ? (
          <>
            <Navigation />
            <SettingsWrapper>
              <LangBlock />
              {isLoggedIn ? (
                <CartButton as={Link} aria-label="cart" to={'/cart'}>
                  {products?.length > 0 && <Count>{products.length}</Count>}
                  <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
                </CartButton>
              ) : (
                <CartButton
                  type="button"
                  aria-label="cart"
                  onClick={handleCartButtonClick}
                >
                  <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
                </CartButton>
              )}
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
            {isLoggedIn ? (
              <CartButton as={Link} aria-label="cart" to={'/cart'}>
                {products?.length > 0 && <Count>{products.length}</Count>}
                <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
              </CartButton>
            ) : (
              <CartButton
                type="button"
                aria-label="cart"
                onClick={handleCartButtonClick}
              >
                <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
              </CartButton>
            )}
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
      {modalHeader && windowWidth < 1024 && (
        <ModalNav action={handleClosedModal} />
      )}
      {isAuthModalOpen && (
        <Modal onClose={closeAuthModal}>
          <AuthFormModal action={closeAuthModal} />
        </Modal>
      )}
      {isProfileModalOpen && (
        <Modal onClose={closProfileModal}>
          <Profile action={closProfileModal} />
        </Modal>
      )}
    </StyledHeader>
  );
};
