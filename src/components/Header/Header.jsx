import {
  ButtonStyled,
  ContainerHeader,
  CartButton,
  StyledHeader,
  UserButton,
  HederLogo
} from './Header.styled';
import { useEffect, useState } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { useDispatch } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { Navigation } from './Components/Navigation/Navigation';
import { SettingsWrapper } from './Components/SettingsWrapper/SettingsWrapper';
import { ModalNav } from './Components/ModalNav/ModalNav';
import { changeLocal } from 'store/auth/slice';
import { LangBlock } from './Components/LangBlock/LangBlock';

export const Header = () => {
  const dispatch = useDispatch();

  const { isModalOpen, toggleModal, closeModal } = useModal();
  const [modalHeader, setModalHeader] = useState(false);
  const [newLocal, setNewLocal] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (newLocal) dispatch(changeLocal(newLocal));
  }, [dispatch, newLocal]);

  const handleOpenModal = () => {
    setModalHeader(true);
  };

  const handleClosedModal = () => {
    setModalHeader(false);
  };

  const handleLangClick = e => {
    closeModal('langMenu');
    setNewLocal(e.target.id);
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
              <LangBlock
                isModalOpen={isModalOpen.langMenu}
                handleLangClick={handleLangClick}
                toggleModal={() => toggleModal('langMenu')}
              />
              <CartButton type="button" aria-label="cart">
                <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
              </CartButton>
              <UserButton type="button" aria-label="user profile">
                <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
              </UserButton>
            </SettingsWrapper>
          </>
        ) : (
          <>
            <CartButton type="button" aria-label="cart">
              <SvgIcon w={36} h={36} icon={'cart'} aria-label="icon cart" />
            </CartButton>
            <ButtonStyled
              type="button"
              onClick={handleOpenModal}
              aria-label="menu"
            >
              <SvgIcon w={36} h={36} icon={'burger'} />
            </ButtonStyled>
          </>
        )}
      </ContainerHeader>
      {modalHeader && (
        <ModalNav
          action={handleClosedModal}
          isModalOpen={isModalOpen.langMenu}
          handleLangClick={handleLangClick}
          toggleModal={() => toggleModal('langMenu')}
        />
      )}
    </StyledHeader>
  );
};
