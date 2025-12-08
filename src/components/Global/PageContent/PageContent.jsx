import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { CLOUD_NAME } from 'utils/constants';
import {
  ContentContainer,
  Number,
  Picture,
  StyledContainer,
  Text,
  Title
} from './PageContent.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { pageContentSizes } from 'utils/imagesUtils';
import { HomeSection } from 'styles/globalComponents.styled';
import { lang } from 'lang/lang';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { useAuth } from 'hooks/useAuth';
import { ImagesSource } from '../ImagesSource';

export const PageContent = ({
  id,
  page,
  title,
  description,
  styles,
  linkTo,
  showBookForm
}) => {
  const { locale, isLoggedIn } = useAuth();
  const { isModalOpen, openModal, closeModal } = useModal();
  const sectionId = title.toLowerCase().replace('_', '-');
  const windowWidth = useWindowWidth();

  const onBookNowClick = () => {
    if (isLoggedIn) showBookForm(sectionId);
    else openModal('auth');
  };

  return (
    <HomeSection styles={styles}>
      <StyledContainer styles={styles}>
        <ContentContainer styles={styles}>
          <Title page={page} styles={styles}>
            {lang[locale][title]}
          </Title>
          {page === 'coworking' && windowWidth > 1023 && (
            <Number styles={styles} id={id}>
              {id}
            </Number>
          )}
          <Text styles={styles}>
            {page === 'coworking' && windowWidth < 1024 && (
              <Number styles={styles} id={id}>
                {id}
              </Number>
            )}
            {lang[locale][description]}
          </Text>
          {windowWidth < 1024 && (
            <Picture styles={styles}>
              <ImagesSource
                imageName={sectionId}
                page={page}
                sectionId={sectionId}
                sizes={pageContentSizes}
                types={[
                  { type: 'webp', format: 'webp' },
                  { type: 'jpeg', format: 'jpg' }
                ]}
              />
              <img
                width={358}
                height={238}
                src={`${CLOUD_NAME}v1/workkava/${page}/${sectionId}/jpeg/${sectionId}.jpg`}
                alt={title}
              />
            </Picture>
          )}
          {linkTo && (
            <>
              {styles !== 'dark' ? (
                <BlueButton as={Link} to={linkTo} style={{ zIndex: 2 }}>
                  {lang[locale].details}
                </BlueButton>
              ) : (
                <WhiteButton as={Link} to={linkTo}>
                  {lang[locale].details}
                </WhiteButton>
              )}
            </>
          )}
          {!linkTo && (
            <>
              {styles !== 'dark' ? (
                <BlueButton onClick={onBookNowClick}>
                  {lang[locale].book_now}
                </BlueButton>
              ) : (
                <WhiteButton onClick={onBookNowClick}>
                  {lang[locale].book_now}
                </WhiteButton>
              )}
            </>
          )}
        </ContentContainer>
        {windowWidth > 1023 && (
          <Picture styles={styles}>
            <ImagesSource
              imageName={sectionId}
              page={page}
              sectionId={sectionId}
              sizes={pageContentSizes}
              types={[
                { type: 'webp', format: 'webp' },
                { type: 'jpeg', format: 'jpg' }
              ]}
            />
            <img
              width={windowWidth > 1024 ? 730 : 532}
              height={windowWidth > 1024 ? 714 : 520}
              src={`${CLOUD_NAME}v1/workkava/${page}/${sectionId}/jpeg/${sectionId}.jpg`}
              alt={title}
            />
          </Picture>
        )}
      </StyledContainer>
      {isModalOpen && (
        <Modal onClose={() => closeModal()}>
          <AuthFormModal action={() => closeModal()} />
        </Modal>
      )}
    </HomeSection>
  );
};
