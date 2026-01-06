import {
  DishItem,
  DishName,
  Price,
  Img,
  PriceWrapper,
  ButtonAddToCart,
  Count
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
import { ImagesSource } from 'components/Global/ImagesSource';
import { dishesSizes } from 'utils/imagesUtils';
import { CLOUD_NAME, JPEG, JPG, PNG, WEBP } from 'utils/constants';
import { PositionToggler } from './components/PositionToggler/PositionToggler';
import { selectProducts } from 'store/cart/selectors';
import { useSelector } from 'react-redux';
import { Currency } from 'components/Global/Currency/Currency';

export const Dish = ({ data, index, title, page, styles }) => {
  const products = useSelector(selectProducts);

  const { locale, shortLocale, isLoggedIn } = useAuth();

  const windowWidth = useWindowWidth();

  const {
    isModalOpen: isAuthModalOpen,
    openModal: openAuthModal,
    closeModal: closeAuthModal
  } = useModal();

  const {
    isModalOpen: isAddToCartModalOpen,
    openModal: openAddToCartModal,
    closeModal: closeAddToCartModal
  } = useModal();

  const [position, setPosition] = useState(1);

  const [countInCartStandart, setCountInCartStandart] = useState();

  const [countInCartXl, setCountInCartXl] = useState();

  const [price, setPrice] = useState();

  useEffect(() => {
    if (position === 1)
      setPrice(Number(data?.[shortLocale]?.standart).toFixed(2));
    if (position === 2) setPrice(Number(data?.[shortLocale]?.xl).toFixed(2));
  }, [position, data, shortLocale]);

  useEffect(() => {
    products.forEach(el => {
      if (el.productId === data._id) {
        if (position === 1) setCountInCartStandart(el.standart);
        if (position === 2) setCountInCartXl(el.xl);
      }
    });
  }, [products, position, data]);

  const handleTogglerClick = value => {
    setPosition(value);
  };

  return (
    <DishItem styles={styles}>
      {(title === 'burgers' || title === 'rolls' || title === 'hot-dogs') && (
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
            { type: WEBP, format: WEBP },
            {
              type: title === 'desserts' ? JPEG : PNG,
              format: title === 'desserts' ? JPG : PNG
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
          alt={data?.[shortLocale]?.title}
          width={windowWidth < 415 ? 358 : 470}
          height={windowWidth < 415 ? 198 : 260}
        />
      </picture>
      <PriceWrapper styles={styles}>
        <DishName styles={styles}>
          {data?.[shortLocale]?.title || 'test'}
        </DishName>
        <Price>
          {price}
          <Currency locale={locale} />
        </Price>
      </PriceWrapper>
      {isLoggedIn ? (
        <ButtonAddToCart styles={styles} onClick={openAddToCartModal}>
          {countInCartStandart > 0 && position === 1 && (
            <Count>{countInCartStandart}</Count>
          )}
          {countInCartXl > 0 && position === 2 && (
            <Count>{countInCartXl}</Count>
          )}
          <SvgIcon w={40} h={40} icon={'cart-02'} />
        </ButtonAddToCart>
      ) : (
        <ButtonAddToCart styles={styles} onClick={openAuthModal}>
          <SvgIcon w={40} h={40} icon={'cart-02'} />
        </ButtonAddToCart>
      )}
      {isAuthModalOpen && (
        <Modal onClose={closeAuthModal}>
          <AuthFormModal action={closeAuthModal} />
        </Modal>
      )}
      {isAddToCartModalOpen && (
        <Modal onClose={closeAddToCartModal}>
          <AddToCartModal
            action={closeAddToCartModal}
            countInCart={
              position === 1 && countInCartStandart
                ? countInCartStandart
                : position === 2 && countInCartXl
                ? countInCartXl
                : 1
            }
            position={position}
            product={data}
            sectionId={title}
            page={page}
            color={backgroundColors[index]}
          />
        </Modal>
      )}
    </DishItem>
  );
};
