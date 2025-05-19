import {
  DishItem,
  Picture,
  DishItemBox,
  DishName,
  Price,
  Img,
  PriceWrapper,
  ButtonAddToCart
} from './Dish.styled';
import { ImagesSource } from '../../Images';
import { Ingredients } from './Ingredients';
import { CLOUD_NAME } from 'utils/GlobalUtils';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Dish = ({
  data: { name, ingredients, price },
  index,
  title,
  styles
}) => {
  const imageName = name.toLowerCase().replace(/ /g, '-');
  const isEven = index % 2 === 0;

  return (
    <DishItem isEven={isEven} styles={styles}>
      <Picture isEven={isEven} styles={styles} title={title}>
        <ImagesSource imageName={imageName} page="cafe" />
        <Img
          title={title}
          src={`${CLOUD_NAME}cafe/${imageName}.png`}
          alt={name}
          isEven={isEven}
        />
      </Picture>
      <DishItemBox isEven={isEven} styles={styles}>
        <DishName styles={styles}>{name}</DishName>
        <Ingredients
          isEven={isEven}
          ingredients={ingredients}
          styles={styles}
        />
      </DishItemBox>
      <PriceWrapper isEven={isEven} styles={styles}>
        <ButtonAddToCart isEven={isEven} styles={styles}>
          <Svg w={40} h={40} icon={'cart-02'} />
        </ButtonAddToCart>
        <Price>{price}₴</Price>
      </PriceWrapper>
    </DishItem>
  );
};
