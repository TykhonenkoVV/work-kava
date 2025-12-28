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

  const { locale } = useAuth();
  const [quantityStandart, setQuantityStandart] = useState(
    product.standartCount
  );

  const [quantityXl, setQuantityXl] = useState(product.xlCount);

  const windowWidth = useWindowWidth();

  const size = ['burgers', 'hot-dogs', 'rols'].includes(product.category);

  const onChangeQuantityStandart = id => {
    if (id === 'inc') {
      setQuantityStandart(state => state + 1);
      dispatch(
        updateProductInCart({
          id: product.id,
          data: { standart: quantityStandart + 1 }
        })
      );
    }
    if (id === 'dec') {
      setQuantityStandart(state => state - 1);
      dispatch(
        updateProductInCart({
          id: product.id,
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
          id: product.id,
          data: { xl: quantityXl + 1 }
        })
      );
    }
    if (id === 'dec') {
      setQuantityXl(state => state - 1);
      dispatch(
        updateProductInCart({
          id: product.id,
          data: { xl: quantityXl - 1 }
        })
      );
    }
  };

  const handleCartDelete = () => {
    dispatch(deleteProductInCart(product.id));
  };

  const handleSizeDelete = e => {
    const id = e.currentTarget.getAttribute('id');
    dispatch(updateProductInCart({ id: product.id, data: { [id]: null } }));
  };

  return (
    <StyledProduct key={product.id}>
      <CartCaption>{product.title}</CartCaption>
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
          {product?.standartCount && (
            <CartPriceWrapper>
              <Price>
                {Number(product.standartPrise).toFixed(2)}
                <Currency locale={locale} />
                {size && ' (Standart)'}
              </Price>
              <Counter
                quantity={quantityStandart}
                onClick={onChangeQuantityStandart}
              />
              {size && product.standartCount && product.xlCount && (
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
          {product?.xlCount && (
            <CartPriceWrapper>
              <Price>
                {Number(product.xlPrise).toFixed(2)}
                <Currency locale={locale} />
                {size && ' (XL)'}
              </Price>
              <Counter quantity={quantityXl} onClick={onChangeQuantityXl} />
              {size && product.standartCount && product.xlCount && (
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
