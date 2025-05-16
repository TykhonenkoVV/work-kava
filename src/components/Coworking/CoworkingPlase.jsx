import { Container, CoworkingSection } from 'components/App.styled';

import {
  Title,
  Number,
  Description,
  ImageBox,
  Picture,
  Img,
  Box,
  InfoBox
} from './CoworkingPlase.styled';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { ImagesSource } from 'components/Images';
import { CloudName } from 'utils/GlobalUtils';
import { devices } from 'styles';

export const CoworkingPlase = ({
  title,
  description,
  styles,
  id,
  bookType,
  showBookForm
}) => {
  const imageName = title.toLowerCase().replace(/ /g, '-');

  const imgSizes = [
    {
      media: devices.desktop,
      width: 680,
      height: 540
    },
    {
      media: devices.tablet,
      width: 492,
      height: 480
    },
    {
      media: devices.mobile,
      width: 244,
      height: 262
    }
  ];

  return (
    <CoworkingSection Coworkingstyles={styles}>
      <Container>
        <Title styles={styles}>{title}</Title>
        <Box styles={styles}>
          <ImageBox styles={styles}>
            <Picture>
              <ImagesSource
                imageName={imageName}
                page="coworking"
                sizes={imgSizes}
                type="png"
              />
              <Img
                styles={styles}
                width={244}
                height={262}
                src={`${CloudName}coworking/${imageName}-mobile.png`}
                alt={title}
              />
            </Picture>
          </ImageBox>
          <InfoBox styles={styles}>
            <Number styles={styles} id={id}>
              {id}
            </Number>
            <Description styles={styles}>{description}</Description>
            {styles !== 'dark' ? (
              <BlueButton onClick={() => showBookForm(bookType)}>
                Book now
              </BlueButton>
            ) : (
              <WhiteButton onClick={() => showBookForm(bookType)}>
                Book now
              </WhiteButton>
            )}
          </InfoBox>
        </Box>
      </Container>
    </CoworkingSection>
  );
};
