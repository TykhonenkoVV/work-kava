import { ImagesSource } from 'components/Global/ImagesSource';
import { useAuth } from 'hooks/useAuth';
import { lang } from 'lang/lang';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, updateProductInCart } from 'store/cart/operations';
import { BlueButton } from 'styles/buttonStyles';
import { productSizes } from 'utils/imagesUtils';
import {
  AddToCartCaption,
  Caption,
  CardWraper,
  ContentWrapper,
  CounterWrapper,
  Img,
  Picture,
  Price,
  Title
} from './AddToCartModal.styled';
import { CLOUD_NAME, JPEG, JPG, PNG, WEBP } from 'utils/constants';
import { selectProducts } from 'store/cart/selectors';
import { Counter } from 'components/Global/Counter/Counter';
import { Currency } from 'components/Global/Currency/Currency';

export const AddToCartModal = ({
  countInCart,
  position,
  product,
  sectionId,
  page,
  color
}) => {
  const products = useSelector(selectProducts);

  const [price, setPrice] = useState();

  const { locale, shortLocale } = useAuth();

  useEffect(() => {
    if (position === 1) setPrice(product?.[shortLocale]?.standart);
    if (position === 2) setPrice(product?.[shortLocale]?.xl);
  }, [position, product, shortLocale]);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(countInCart);

  const onChangeQuantity = id => {
    if (id === 'inc') setQuantity(state => state + 1);
    if (id === 'dec') setQuantity(state => state - 1);
  };

  const onAddToCart = () => {
    let res = {};
    if (position === 1) res.standart = quantity;
    if (position === 2) res.xl = quantity;

    const isExist = products.findIndex(
      option => option.productId === product._id
    );
    if (isExist !== -1) {
      dispatch(
        updateProductInCart({
          id: products[isExist]._id,
          data: { ...res }
        })
      );
    } else
      dispatch(
        addProductToCart({
          productId: product._id,
          category: sectionId,
          ...res,
          archived: false
        })
      );
  };

  return (
    <>
      <Caption>{lang[locale].add_to_cart}</Caption>
      <Title>{product.title}</Title>
      <CardWraper>
        <Picture>
          <ImagesSource
            imageName={product._id}
            page={page}
            sectionId={sectionId}
            sizes={productSizes}
            types={[
              { type: WEBP, format: WEBP },
              {
                type: sectionId === 'desserts' ? JPEG : PNG,
                format: sectionId === 'desserts' ? JPG : PNG
              }
            ]}
            URLs={{ webpImgURL: product.webpImgURL, imgURL: product.imgURL }}
          />
          <Img
            color={color}
            title={product.title}
            src={`${CLOUD_NAME}w_235,h_130,c_fill/${product.imgURL}`}
            alt={product[`title_${shortLocale}`]}
            width={235}
            height={130}
          />
        </Picture>
        <ContentWrapper>
          <CounterWrapper>
            <AddToCartCaption>{lang[locale].product_quantity}</AddToCartCaption>
            <Counter quantity={quantity} onClick={onChangeQuantity} />
          </CounterWrapper>
          <div>
            <AddToCartCaption>{lang[locale].price}</AddToCartCaption>
            <Price>
              {(price * quantity).toFixed(2)}
              <Currency locale={locale} />
            </Price>
          </div>
        </ContentWrapper>
      </CardWraper>
      <BlueButton onClick={onAddToCart} type="button">
        {lang[locale].add}
      </BlueButton>
    </>
  );
};
