import {
  ButtonStyled,
  ContainerHeader,
  LangButton,
  CartButton,
  StyledHeader,
  UserButton,
  HederLogo
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useEffect, useState } from 'react';
import { ModalNav } from './Components/ModalNav';
import { Navigation } from './Components/Navigation';
import { SettingsWrapper } from './Components/SettingsWrapper';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [modalHeader, setModalHeader] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setModalHeader(true);
  };

  const handleClosedModal = () => {
    setModalHeader(false);
  };

  if (modalHeader) {
    return <ModalNav action={handleClosedModal} />;
  }

  return (
    <StyledHeader>
      <ContainerHeader>
        <HederLogo to="/" aria-label="Home">
          <Svg
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
              <LangButton type="button" aria-label="language" />
              <CartButton type="button" aria-label="cart">
                <Svg w={36} h={36} icon={'cart'} aria-label="icon cart" />
              </CartButton>
              <UserButton type="button" aria-label="user profile">
                <Svg w={40} h={40} icon={'avatar'} aria-label="icon user" />
              </UserButton>
            </SettingsWrapper>
          </>
        ) : (
          <>
            <CartButton type="button" aria-label="cart">
              <Svg w={36} h={36} icon={'cart'} aria-label="icon cart" />
            </CartButton>
            <ButtonStyled
              type="button"
              onClick={handleOpenModal}
              aria-label="menu"
            >
              <Svg w={36} h={36} icon={'burger'} />
            </ButtonStyled>
          </>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
