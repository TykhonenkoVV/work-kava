import { ImagesSource } from 'components/Images';
import {
  DishTitle,
  ImageWrapper,
  Ingredsents,
  IngreientsBtn,
  Price,
  PriceColumn,
  PriceColumnWrapper,
  PriceText,
  PriceWrapper,
  Span
} from './FastfoodItem.styled';
import { devices } from 'styles';
import { CloudName } from 'utils/GlobalUtils';
import { useEffect, useState } from 'react';

export const FastfoodItem = ({
  item: {
    title,
    image,
    price_standart,
    price_double,
    price_xl = null,
    currency,
    ingredients
  }
}) => {
  const imgSizes = [
    {
      media: devices.desktop,
      width: 320,
      height: 162
    },
    {
      media: devices.tablet,
      width: 262,
      height: 121
    },
    {
      media: devices.mobile,
      width: 304,
      height: 186
    }
  ];
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <DishTitle>{title}</DishTitle>
      <ImageWrapper>
        <ImagesSource
          imageName={image}
          page="fastfood"
          sizes={imgSizes}
          type="png"
        />
        <img
          title={title}
          src={`${CloudName}fastfood/${image}-mobile.png`}
          alt={title}
          width="485"
          height="246"
          srcSet={`${CloudName}fastfood/${image}-mobile.png 1x,
              ${CloudName}fastfood/${image}-mobile.png 2x`}
        />
      </ImageWrapper>
      <PriceWrapper>
        <PriceColumnWrapper>
          <PriceColumn isOdd>
            <PriceText>Standart</PriceText>
            <Price>{price_standart + currency}</Price>
          </PriceColumn>
          <PriceColumn>
            <PriceText>{price_double ? 'Double' : 'XL'}</PriceText>
            <Price>
              {!price_xl ? price_double + currency : price_xl + currency}
            </Price>
          </PriceColumn>
        </PriceColumnWrapper>
        {windowWidth <= 1023 && (
          <IngreientsBtn type="button">Ingredients</IngreientsBtn>
        )}
        {windowWidth >= 1024 && (
          <Ingredsents>
            <Span>Ingredients:</Span> {ingredients}
          </Ingredsents>
        )}
      </PriceWrapper>
    </>
  );
};
