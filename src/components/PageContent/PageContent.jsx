import { Link } from 'react-router-dom';
import { BlueButton, WhiteButton } from 'styles/buttonStyles';
import { CLOUD_NAME } from 'utils/GlobalUtils';
import {
  ContentContainer,
  Number,
  Picture,
  StyledContainer,
  Text,
  Title
} from './PageContent.styled';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { imgSizes } from 'utils/commonUtils';
import { HomeSection } from 'styles/globalComponents.styled';
import { ImagesSource } from 'components/Global/Images';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'store/auth/selectors';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';

export const PageContent = ({
  id,
  page,
  title,
  description,
  styles,
  linkTo,
  showBookForm
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isModalOpen, openModal, closeModal } = useModal();

  const { locale } = useSelector(selectUser);
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
                sizes={imgSizes}
                type="jpg"
              />
              <img
                width={358}
                height={238}
                src={`${CLOUD_NAME}${page}/jpeg/${page}-${sectionId}.jpg`}
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
              sizes={imgSizes}
              type="jpg"
            />
            <img
              width={windowWidth > 1024 ? 730 : 532}
              height={windowWidth > 1024 ? 714 : 520}
              src={`${CLOUD_NAME}${page}/jpeg/${page}-${sectionId}.jpg`}
              alt={title}
            />
          </Picture>
        )}
      </StyledContainer>
      {isModalOpen.auth && (
        <Modal onClose={() => closeModal('auth')}>
          <AuthFormModal action={() => closeModal('auth')} />
        </Modal>
      )}
    </HomeSection>
  );
};
