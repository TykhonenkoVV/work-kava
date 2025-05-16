import { ImagesSource } from 'components/Images';
import {
  Currency,
  DishImage,
  DishTitle,
  ImageWrapper,
  Price,
  PriceColumn,
  PriceText,
  PriceWrapper
} from './FastfoodItem.styled';

export const FastfoodItem = ({
  item: {
    name,
    title,
    image,
    smallSize,
    bigSize,
    smallPrice,
    bigPrice,
    currency
  }
}) => {
  return (
    <>
      <DishTitle>{name}</DishTitle>
      <ImageWrapper>
        <picture>
          <ImagesSource imageName={image} page="fastfood" />
          <DishImage
            title={title}
            src={`https://res.cloudinary.com/dpg391xoj/image/upload/v1744579613/workkava/fastfood/${image}.png`}
            alt={name}
            width="485"
            height="246"
            srcSet={`https://res.cloudinary.com/dpg391xoj/image/upload/v1744579613/workkava/fastfood/${image}.png 1x,
              https://res.cloudinary.com/dpg391xoj/image/upload/v1744579613/workkava/fastfood/${image}.png 2x`}
          />
        </picture>
      </ImageWrapper>
      <PriceWrapper>
        <PriceColumn>
          <PriceText>{smallSize}</PriceText>
          <Price>{smallPrice}</Price>
          <Currency>{currency}</Currency>
        </PriceColumn>
        <PriceColumn>
          <PriceText>{bigSize}</PriceText>
          <Price>{bigPrice}</Price>
          <Currency>{currency}</Currency>
        </PriceColumn>
      </PriceWrapper>
    </>
  );
};
