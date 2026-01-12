import { CLOUD_NAME, JPEG, JPG, PNG, WEBP } from 'utils/constants';
import {
  CartCaption,
  CartPriceBox,
  CartPriceWrapper,
  CartWrapper,
  HistoryPicture,
  Price,
  StyledProduct
} from './HistoryProduct.styled';
import { useAuth } from 'hooks/useAuth';
import { Currency } from 'components/Global/Currency/Currency';
import { ImagesSource } from 'components/Global/ImagesSource';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { cartImgSizes } from 'utils/imagesUtils';

export const HistoryProduct = ({ product }) => {
  const { locale, shortLocale } = useAuth();

  const size = ['burgers', 'hot-dogs', 'rolls'].includes(product.category);

  const windowWidth = useWindowWidth();

  return (
    <StyledProduct key={product.id}>
      <CartCaption>{product[shortLocale].title}</CartCaption>
      <CartWrapper>
        <HistoryPicture>
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
        </HistoryPicture>
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
