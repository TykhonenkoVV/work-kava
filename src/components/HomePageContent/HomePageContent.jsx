import React from 'react';
import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { HomeSection } from 'components/App.styled';
import { devices } from 'styles';
import { ImagesSource } from 'components/Images';
import { CLOUD_NAME } from 'utils/GlobalUtils';
import {
  ContentContainer,
  Picture,
  StyledContainer,
  Text,
  Title
} from './HomePageContent.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const HomePageContent = ({ title, description, styles, linkTo }) => {
  const imageName = title.toLowerCase();

  const windowWidth = useWindowWidth();

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
      <StyledContainer>
        <ContentContainer styles={styles}>
          <Title styles={styles}>{title}</Title>
          <Text styles={styles}>{description}</Text>
          {windowWidth < 1024 && (
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
          )}
          {styles !== 'dark' ? (
            <BlueButton as={Link} to={linkTo} style={{ zIndex: 2 }}>
              Details
            </BlueButton>
          ) : (
            <WhiteButton as={Link} to={linkTo}>
              Details
            </WhiteButton>
          )}
        </ContentContainer>
        {windowWidth > 1023 && (
          <Picture styles={styles}>
            <ImagesSource
              imageName={imageName}
              page="home"
              sizes={imgSizes}
              type="jpg"
            />
            <img
              width={windowWidth > 1024 ? 730 : 532}
              height={windowWidth > 1024 ? 714 : 520}
              src={`${CLOUD_NAME}home/jpeg/home-${imageName}.jpg`}
              alt={title}
            />
          </Picture>
        )}
      </StyledContainer>
    </HomeSection>
  );
};
