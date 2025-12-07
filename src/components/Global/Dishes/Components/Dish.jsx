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
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { AuthFormModal } from 'components/AuthFormModal/AuthFormModal';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { AddToCartModal } from 'components/AddToCartModal/AddToCartModal';
import { PositionToggler } from './Dish/components/PositionToggler/PositionToggler';
import { changePrice } from 'services/dishServices';
import { ImagesSource } from 'components/Global/ImagesSource';
import { dishesSizes } from 'utils/imagesUtils';
import { CLOUD_NAME } from 'utils/constants';

export const Dish = ({ data, index, title, page, styles }) => {
  const { locale, isLoggedIn } = useAuth();
  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';
  const windowWidth = useWindowWidth();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [position, setPosition] = useState(1);
  const [price, setPrice] = useState();

  useEffect(() => {
    setPrice(changePrice(position, title, data, shortLocale));
  }, [position, title, data, shortLocale]);

  const handleTogglerClick = value => {
    setPosition(value);
  };

  return (
    <DishItem styles={styles}>
      {(title === 'burgers' || title === 'rolls' || title === 'hot_dogs') && (
        <PositionToggler
          title={title}
          defaultPosition={position}
          onClick={handleTogglerClick}
        />
      )}
      <picture>
        <ImagesSource
          imageName={data._id}
          page={page}
          sectionId={title}
          sizes={dishesSizes}
          types={[
            { type: 'webp', format: 'webp' },
            {
              type: title === 'desserts' ? 'jpeg' : 'png',
              format: title === 'desserts' ? 'jpg' : 'png'
            }
          ]}
          URLs={{ webpImgURL: data.webpImgURL, imgURL: data.imgURL }}
        />
        <Img
          color={backgroundColors[index]}
          title={title}
          src={`${CLOUD_NAME}w_${windowWidth < 415 ? 358 : 470},h_${
            windowWidth < 415 ? 198 : 260
          },c_fill/${data.imgURL}`}
          alt={data[`title_${shortLocale}`]}
          width={windowWidth < 415 ? 358 : 470}
          height={windowWidth < 415 ? 198 : 260}
        />
      </picture>
      <PriceWrapper styles={styles}>
        <DishName styles={styles}>{data[`title_${shortLocale}`]}</DishName>
        <Price>
          {price}
          {locale === 'en-UK' && <span>&#36;</span>}
          {locale === 'de-DE' && <span>&#8364;</span>}
          {locale === 'uk-UA' && <span>&#8372;</span>}
        </Price>
      </PriceWrapper>
      {isLoggedIn ? (
        <ButtonAddToCart styles={styles} onClick={() => openModal('addToCart')}>
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
      {isModalOpen.addToCart && (
        <Modal onClose={() => closeModal('addToCart')}>
          <AddToCartModal
            product={data}
            page={page}
            sectionId={title}
            position={position}
            action={() => closeModal('addToCart')}
            color={backgroundColors[index]}
          />
        </Modal>
      )}
    </DishItem>
  );
};
