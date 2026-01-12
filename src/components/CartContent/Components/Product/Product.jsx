import { CLOUD_NAME, JPEG, JPG, PNG, WEBP } from 'utils/constants';
import {
  CartCaption,
  CartDeleteButton,
  CartPicture,
  CartPriceBox,
  CartPriceWrapper,
  CartWrapper,
  CountTitle,
  Price,
  PriceTitle,
  PriceTitleWrapper,
  SizeDeleteButton,
  StyledProduct
} from './Product.styled';
import { Counter } from 'components/Global/Counter/Counter';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { useDispatch } from 'react-redux';
import {
  deleteProductInCart,
  updateProductInCart
} from 'store/cart/operations';
import { Currency } from 'components/Global/Currency/Currency';
import { lang } from 'lang/lang';
import { ImagesSource } from 'components/Global/ImagesSource';
import { cartImgSizes } from 'utils/imagesUtils';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { locale, shortLocale } = useAuth();
  const [quantityStandart, setQuantityStandart] = useState(
    product.standart || product.count
  );

  const [quantityXl, setQuantityXl] = useState(product.xl);

  const windowWidth = useWindowWidth();

  const size = ['burgers', 'hot-dogs', 'rolls'].includes(product.category);

  const onChangeQuantityStandart = id => {
    let identificator = 'standart';
    if (product.count) identificator = 'count';
    if (id === 'inc') {
      console.log('Product', product);
      setQuantityStandart(state => state + 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { [identificator]: quantityStandart + 1 }
        })
      );
    }
    if (id === 'dec') {
      console.log('Product', product);
      setQuantityStandart(state => state - 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { [identificator]: quantityStandart - 1 }
        })
      );
    }
  };

  const onChangeQuantityXl = id => {
    if (id === 'inc') {
      setQuantityXl(state => state + 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { xl: quantityXl + 1 }
        })
      );
    }
    if (id === 'dec') {
      setQuantityXl(state => state - 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { xl: quantityXl - 1 }
        })
      );
    }
  };

  const handleCartDelete = () => {
    dispatch(deleteProductInCart(product._id));
  };

  const handleSizeDelete = e => {
    const value = e.currentTarget.getAttribute('id');
    dispatch(updateProductInCart({ id: product._id, data: { [value]: null } }));
  };

  return (
    <StyledProduct>
      <CartCaption>{product[shortLocale].title}</CartCaption>
      <CartDeleteButton type="button" onClick={handleCartDelete}>
        <SvgIcon
          w={windowWidth < 414 ? 16 : 20}
          h={windowWidth < 414 ? 16 : 20}
          icon={'delete'}
        />
      </CartDeleteButton>
      <CartWrapper>
        <CartPicture>
          <ImagesSource
            imageName={product._id}
            sectionId="cart"
            sizes={cartImgSizes}
            URLs={{ webpImgURL: product.webpImgURL, imgURL: product.imgURL }}
            types={[
              { type: WEBP, format: WEBP },
              {
                type: product.category === 'desserts' ? JPEG : PNG,
                format: product.category === 'desserts' ? JPG : PNG
              }
            ]}
          />
          <img
            src={`${CLOUD_NAME}w_${windowWidth < 1024 ? 235 : 268},h_${
              windowWidth < 1024 ? 130 : 138
            },c_fill/${product.imgURL}`}
            alt={product.title}
            width={windowWidth < 1024 ? 235 : 268}
            height={windowWidth < 1024 ? 130 : 138}
          />
        </CartPicture>
        <CartPriceBox>
          <PriceTitleWrapper>
            <PriceTitle>{lang[locale].price}</PriceTitle>
            <CountTitle
              className={product.standart && product.xl ? 'margin' : null}
            >
              {lang[locale].product_qty}
            </CountTitle>
          </PriceTitleWrapper>
          {(product?.standart || product?.count) && (
            <CartPriceWrapper>
              <Price>
                {Number(
                  product[shortLocale].standart || product[shortLocale].price
                ).toFixed(2)}
                <Currency locale={locale} />
                {size && ' (Standart)'}
              </Price>
              <Counter
                quantity={quantityStandart}
                max={product.count ? 5 : 9}
                onClick={onChangeQuantityStandart}
              />
              {product.standart && product.xl && (
                <SizeDeleteButton
                  id="standart"
                  type="button"
                  onClick={handleSizeDelete}
                >
                  <SvgIcon
                    w={windowWidth < 414 ? 16 : 20}
                    h={windowWidth < 414 ? 16 : 20}
                    icon={'delete'}
                  />
                </SizeDeleteButton>
              )}
            </CartPriceWrapper>
          )}
          {product?.xl && (
            <CartPriceWrapper>
              <Price>
                {Number(product.xl).toFixed(2)}
                <Currency locale={locale} />
                {size && ' (XL)'}
              </Price>
              <Counter
                quantity={quantityXl}
                max={9}
                onClick={onChangeQuantityXl}
              />
              {product.standart && product.xl && (
                <SizeDeleteButton
                  id="xl"
                  type="button"
                  onClick={handleSizeDelete}
                >
                  <SvgIcon
                    w={windowWidth < 414 ? 16 : 20}
                    h={windowWidth < 414 ? 16 : 20}
                    icon={'delete'}
                  />
                </SizeDeleteButton>
              )}
            </CartPriceWrapper>
          )}
        </CartPriceBox>
      </CartWrapper>
    </StyledProduct>
  );
};
