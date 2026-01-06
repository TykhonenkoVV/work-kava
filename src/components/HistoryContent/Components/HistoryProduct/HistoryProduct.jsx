import { CLOUD_NAME } from 'utils/constants';
import {
  CartCaption,
  CartPriceBox,
  CartPriceWrapper,
  CartWrapper,
  Img,
  Price,
  StyledProduct
} from './HistoryProduct.styled';
import { useAuth } from 'hooks/useAuth';
import { Currency } from 'components/Global/Currency/Currency';

export const HistoryProduct = ({ product }) => {
  const { locale, shortLocale } = useAuth();

  const size = ['burgers', 'hot-dogs', 'rolls'].includes(product.category);

  return (
    <StyledProduct key={product.id}>
      <CartCaption>{product[shortLocale].title}</CartCaption>
      <CartWrapper>
        <Img
          src={`${CLOUD_NAME}w_235,h_130,c_fill/${product.imgURL}`}
          alt={product.en.title}
          style={{ backgroundColor: 'white' }}
        />
        <CartPriceBox>
          {product?.standart && (
            <CartPriceWrapper>
              <Price>
                {`${product.standart} x ${Number(
                  product[shortLocale].standart
                ).toFixed(2)}`}
                <Currency locale={locale} />
                {size && ' (Standart)'}
              </Price>
            </CartPriceWrapper>
          )}
          {product?.xl && (
            <CartPriceWrapper>
              <Price>
                {`${product.xl} x ${Number(product[shortLocale].xl).toFixed(
                  2
                )}`}
                <Currency locale={locale} />
                {size && ' (XL)'}
              </Price>
            </CartPriceWrapper>
          )}
        </CartPriceBox>
      </CartWrapper>
    </StyledProduct>
  );
};
