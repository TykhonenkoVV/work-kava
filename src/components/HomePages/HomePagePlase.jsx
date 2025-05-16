import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { Container, HomeSection } from 'components/App.styled';
import {
  Title,
  Text,
  CoffeContainer,
  CoffeeImg,
  StyleContainerBtn,
  Picture
} from './HomePagesPlase.styled';
import { devices } from 'styles';
import { ImagesSource } from 'components/Images';
import { CloudName } from 'utils/GlobalUtils';

export const HomePagePlase = ({ title, description, styles, linkTo }) => {
  const imageName = title.toLowerCase();

  const imgSizes = [
    {
      media: devices.desktop,
      width: 818,
      height: 540
    },
    {
      media: devices.tablet,
      width: 516,
      height: 480
    },
    {
      media: devices.mobile,
      width: 356,
      height: 218
    }
  ];

  return (
    <HomeSection styles={styles}>
      <Container>
        <Title styles={styles}>{title}</Title>
        <CoffeContainer styles={styles}>
          <Text styles={styles}>{description}</Text>

          <Picture styles={styles}>
            <ImagesSource
              imageName={imageName}
              page="home"
              sizes={imgSizes}
              type="jpg"
            />
            <CoffeeImg
              styles={styles}
              width={356}
              height={218}
              src={`${CloudName}home/${imageName}-mobile.jpg`}
              alt={title}
              onError={e => {
                console.error('Image loading error:', e);
              }}
            />
          </Picture>
          <StyleContainerBtn styles={styles}>
            {styles !== 'dark' ? (
              <BlueButton as={Link} to={linkTo} style={{ zIndex: 2 }}>
                Details
              </BlueButton>
            ) : (
              <WhiteButton as={Link} to={linkTo}>
                Details
              </WhiteButton>
            )}
          </StyleContainerBtn>
        </CoffeContainer>
      </Container>
    </HomeSection>
  );
};
