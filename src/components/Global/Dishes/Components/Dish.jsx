import {
  DishItem,
  DishName,
  Price,
  Img,
  PriceWrapper,
  ButtonAddToCart
} from './Dish.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { backgroundColors } from 'utils/commonUtils';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const Dish = ({
  data: { title_en, price_en, imgURL, img2xURL, webpImgURL, webpImg2xURL },
  index,
  title,
  styles
}) => {
  const windowWidth = useWindowWidth();
  return (
    <DishItem styles={styles}>
      <picture>
        <source srcSet={`${webpImgURL} 1x, ${webpImg2xURL} 2x`} />
        <source srcSet={`${imgURL} 1x, ${img2xURL} 2x`} />
        <Img
          color={backgroundColors[index]}
          title={title}
          src={imgURL}
          alt={title_en}
          width={windowWidth < 415 ? 358 : 470}
          height={windowWidth < 415 ? 198 : 260}
        />
      </picture>
      <PriceWrapper styles={styles}>
        <DishName styles={styles}>{title_en}</DishName>
        <Price>{price_en}&#36;</Price>
      </PriceWrapper>
      <ButtonAddToCart styles={styles}>
        <SvgIcon w={40} h={40} icon={'cart-02'} />
      </ButtonAddToCart>
    </DishItem>
  );
};
