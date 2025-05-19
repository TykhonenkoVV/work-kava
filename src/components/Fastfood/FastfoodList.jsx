import { Svg } from 'components/SvgIcon/SvgIcon';
import { FastfoodItem } from './FastfoodItem';
import { CartBtn, Item, ItemsList } from './FastfoodList.styled';

export const FastfoodList = ({ items }) => {
  const count = items.length;
  const res = i => {
    let result;
    if (i % 3 === 0) {
      if (count - i === 2) {
        result = 2;
      }
      if (count - i === 1) {
        result = 1;
      }
    }
    return result;
  };

  return (
    <ItemsList>
      {items.map(fastfood => (
        <Item key={fastfood.id} id={res(fastfood.index)}>
          <CartBtn type="button" aria-label="add to cart">
            <Svg w={40} h={40} icon={'cart-02'} />
          </CartBtn>
          <FastfoodItem item={fastfood} />
        </Item>
      ))}
    </ItemsList>
  );
};
