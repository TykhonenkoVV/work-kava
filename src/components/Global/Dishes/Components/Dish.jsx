import {
  DishItem,
  DishName,
  Price,
  Img,
  PriceWrapper,
  ButtonAddToCart
} from './Dish.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { backgroundColors } from 'utils/commonUtils';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'store/auth/selectors';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';

export const Dish = ({ data, index, title, styles }) => {
  const { locale } = useSelector(selectUser);
  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';
  const windowWidth = useWindowWidth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <DishItem styles={styles}>
      <picture>
        <source srcSet={`${data.webpImgURL} 1x, ${data.webpImg2xURL} 2x`} />
        <source srcSet={`${data.imgURL} 1x, ${data.img2xURL} 2x`} />
        <Img
          color={backgroundColors[index]}
          title={title}
          src={data.imgURL}
          alt={data[`title_${shortLocale}`]}
          width={windowWidth < 415 ? 358 : 470}
          height={windowWidth < 415 ? 198 : 260}
        />
      </picture>
      <PriceWrapper styles={styles}>
        <DishName styles={styles}>{data[`title_${shortLocale}`]}</DishName>
        <Price>
          {title === 'burgers' || title === 'hot_dogs'
            ? data[`price_standart_${shortLocale}`]
            : title === 'rolls'
            ? data[`price_xl_${shortLocale}`]
            : data[`price_${shortLocale}`]}
          {locale === 'en-UK' && <span>&#36;</span>}
          {locale === 'de-DE' && <span>&#8364;</span>}
          {locale === 'uk-UA' && <span>&#8372;</span>}
        </Price>
      </PriceWrapper>
      {isLoggedIn ? (
        <ButtonAddToCart styles={styles}>
          <SvgIcon w={40} h={40} icon={'cart-02'} />
        </ButtonAddToCart>
      ) : (
        <ButtonAddToCart styles={styles} onClick={() => openModal('auth')}>
          <SvgIcon w={40} h={40} icon={'cart-02'} />
        </ButtonAddToCart>
      )}
      {isModalOpen.auth && (
        <Modal onClose={() => closeModal('auth')}>
          <AuthFormModal action={() => closeModal('auth')} />
        </Modal>
      )}
    </DishItem>
  );
};
