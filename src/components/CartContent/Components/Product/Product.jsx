import { CLOUD_NAME } from 'utils/constants';
import {
  CartCaption,
  CartDeleteButton,
  CartPriceBox,
  CartPriceWrapper,
  CartWrapper,
  Img,
  Price,
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

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { locale, shortLocale } = useAuth();
  const [quantityStandart, setQuantityStandart] = useState(product.standart);

  const [quantityXl, setQuantityXl] = useState(product.xl);

  const windowWidth = useWindowWidth();

  const size = ['burgers', 'hot-dogs', 'rolls'].includes(product.category);

  const onChangeQuantityStandart = id => {
    if (id === 'inc') {
      console.log('Product', product);
      setQuantityStandart(state => state + 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { standart: quantityStandart + 1 }
        })
      );
    }
    if (id === 'dec') {
      console.log('Product', product);
      setQuantityStandart(state => state - 1);
      dispatch(
        updateProductInCart({
          id: product._id,
          data: { standart: quantityStandart - 1 }
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
        <Img
          src={`${CLOUD_NAME}w_235,h_130,c_fill/${product.imgURL}`}
          alt={product.title}
          style={{ backgroundColor: 'white' }}
        />
        <CartPriceBox>
          {product?.standart && (
            <CartPriceWrapper>
              <Price>
                {Number(product[shortLocale].standart).toFixed(2)}
                <Currency locale={locale} />
                {size && ' (Standart)'}
              </Price>
              <Counter
                quantity={quantityStandart}
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
              <Counter quantity={quantityXl} onClick={onChangeQuantityXl} />
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
