import { ImagesSource } from 'components/Global/ImagesSource';
import { useAuth } from 'hooks/useAuth';
import { lang } from 'lang/lang';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from 'store/cart/operations';
import { BlueButton } from 'styles/buttonStyles';
import { productSizes } from 'utils/imagesUtils';
import {
  Caption,
  CardWraper,
  ContentWrapper,
  Counter,
  CounterButton,
  CounterCaption,
  CounterContent,
  CounterWrapper,
  Img,
  Picture,
  Price,
  PriceCaption,
  PriceWrapper,
  Title
} from './AddToCartModal.styled';
import { CLOUD_NAME } from 'utils/constants';
import { changePrice } from 'services/dishServices';

export const AddToCartModal = ({
  action,
  position,
  product,
  sectionId,
  page,
  color
}) => {
  const [price, setPrice] = useState();

  const { locale } = useAuth();

  const shortLocale =
    locale === 'en-UK' ? 'en' : locale === 'de-DE' ? 'de' : 'ua';

  useEffect(() => {
    setPrice(changePrice(position, sectionId, product, shortLocale));
  }, [position, sectionId, product, shortLocale]);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = id => {
    if (id === 'inc') setQuantity(state => state + 1);
    if (id === 'dec') setQuantity(state => state - 1);
  };

  const onAddToCart = () => {
    let res = {};
    if (position === 1) {
      if (product.price_standart_en) {
        res.price_en = product.price_standart_en;
        res.price_de = product.price_standart_de;
        res.price_ua = product.price_standart_ua;
      }
      if (product.price_en) {
        res.price_en = product.price_en;
        res.price_de = product.price_de;
        res.price_ua = product.price_ua;
      }
    } else if (position === 2) {
      if (product.price_double_en) {
        res.price_en = product.price_double_en;
        res.price_de = product.price_double_de;
        res.price_ua = product.price_double_ua;
      } else if (product.price_xl_en) {
        res.price_en = product.price_xl_en;
        res.price_de = product.price_xl_de;
        res.price_ua = product.price_xl_ua;
      }
    }
    dispatch(
      addProductToCart({
        ...res,
        productId: product._id,
        position,
        category: sectionId,
        count: quantity
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
              { type: 'webp', format: 'webp' },
              { type: 'png', format: 'png' }
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
            <CounterCaption>{lang[locale].product_quantity}</CounterCaption>
            <Counter>
              <CounterButton
                disabled={quantity < 2}
                type="button"
                onClick={() => onChangeQuantity('dec')}
              ></CounterButton>
              <CounterContent>{quantity}</CounterContent>
              <CounterButton
                disabled={quantity > 9}
                id="plus"
                type="button"
                onClick={() => onChangeQuantity('inc')}
              ></CounterButton>
            </Counter>
          </CounterWrapper>
          <PriceWrapper>
            <PriceCaption>{lang[locale].price}</PriceCaption>
            <Price>
              {(price * quantity).toFixed(2)}
              {locale === 'en-UK' && <span>&#36;</span>}
              {locale === 'de-DE' && <span>&#8364;</span>}
              {locale === 'uk-UA' && <span>&#8372;</span>}
            </Price>
          </PriceWrapper>
        </ContentWrapper>
      </CardWraper>
      <BlueButton onClick={onAddToCart} type="button">
        {lang[locale].add}
      </BlueButton>
    </>
  );
};
