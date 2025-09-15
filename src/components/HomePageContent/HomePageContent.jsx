import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { Container, HomeSection } from 'components/App.styled';
import { devices } from 'styles';
import { ImagesSource } from 'components/Images';
import { CLOUD_NAME } from 'utils/GlobalUtils';
import {
  ContentContainer,
  Picture,
  StyleContainerBtn,
  Text,
  Title
} from './HomePageContent.styled';

export const HomePageContent = ({ title, description, styles, linkTo }) => {
  const imageName = title.toLowerCase();

  const imgSizes = [
    {
      media: devices.desktop,
      width: 730,
      height: 714
    },
    {
      media: devices.tablet,
      width: 532,
      height: 520
    },
    {
      media: devices.mobile,
      width: 358,
      height: 238
    }
  ];

  return (
    <HomeSection styles={styles}>
      <Container>
        <Title styles={styles}>{title}</Title>
        <ContentContainer styles={styles}>
          <Text styles={styles}>{description}</Text>
          <Picture styles={styles}>
            <ImagesSource
              imageName={imageName}
              page="home"
              sizes={imgSizes}
              type="jpg"
            />
            <img
              width={358}
              height={238}
              src={`${CLOUD_NAME}home/jpeg/home-${imageName}.jpg`}
              alt={title}
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
        </ContentContainer>
      </Container>
    </HomeSection>
  );
};
