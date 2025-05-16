import { Link } from 'react-router-dom';
import {
  ButtonStyled,
  ContainerHeader,
  LangButton,
  CartButton,
  StyledHeader,
  UserButton
} from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useEffect, useState } from 'react';
import { ModalNav } from './ModalNav';
import { Navigation } from './Navigation';
import { SettingsWrapper } from './SettingsWrapper';

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

  const sizeLogoWidth = windowWidth >= 1440 ? 201 : 150;
  const sizeLogoHeight = windowWidth >= 1440 ? 46 : 32;
  const stylyLogo =
    windowWidth >= 1460
      ? { marginRight: '50px' }
      : windowWidth <= 1023
      ? { marginRight: 'auto' }
      : { marginRight: '24px' };

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
        <Link to="/" aria-label="Home" style={stylyLogo}>
          <Svg
            w={sizeLogoWidth}
            h={sizeLogoHeight}
            icon={'logo'}
            aria-label="logotype work kava, go home"
          />
        </Link>
        {windowWidth >= 1024 ? (
          <>
            <Navigation />
            <SettingsWrapper>
              <LangButton type="button" aria-label="language" />
              <CartButton type="button" aria-label="cart">
                <Svg w={40} h={40} icon={'cart'} aria-label="icon cart" />
              </CartButton>
              <UserButton type="button" aria-label="user profile">
                <Svg w={40} h={40} icon={'avatar'} aria-label="icon user" />
              </UserButton>
            </SettingsWrapper>
          </>
        ) : (
          <ButtonStyled
            type="button"
            onClick={handleOpenModal}
            aria-label="menu"
          >
            <Svg w={32} h={32} icon={'burger'} />
          </ButtonStyled>
        )}
      </ContainerHeader>
    </StyledHeader>
  );
};
