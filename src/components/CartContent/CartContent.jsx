import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'store/cart/operations';
import { selectCart, selectProducts } from 'store/cart/selectors';
import {
  CartTitle,
  EmptyTitle,
  Img,
  ProductsWrapper,
  ResultTitle
} from './CartContent.styled';
import { BlueButton } from 'styles/buttonStyles';
import { Product } from './Components/Product/Product';
import { lang } from 'lang/lang';
import { createNewCarts, totalPrice } from 'services/cartServices';
import { Currency } from 'components/Global/Currency/Currency';
import { EMPTY_CART } from 'utils/constants';

export const CartContent = () => {
  const { locale, shortLocale } = useAuth();
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [isLast, setIsLast] = useState();
  const [newCart, setNewCart] = useState();
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    let res = [];
    products.forEach(el => {
      res.push({ category: el.category, id: el.productId });
    });
    dispatch(getProductById(res));
    setIsLast(products.length);
  }, [products, dispatch]);

  useEffect(() => {
    if (isLast !== products.length) return;
    setNewCart(createNewCarts(products, cart, shortLocale));
  }, [isLast, products, cart, shortLocale]);

  useEffect(() => {
    if (newCart?.length !== products.length) return;
    setTotalAmount(totalPrice(newCart));
  }, [newCart, products]);

  return (
    <>
      {products.length > 0 ? (
        <>
          <CartTitle>
            {lang[locale].cart} ({products.length})
          </CartTitle>
          <ProductsWrapper>
            {newCart?.length === products.length &&
              newCart.map(product => (
                <Product key={product.id} product={product} />
              ))}
          </ProductsWrapper>
          <ResultTitle>
            {lang[locale].total} {Number(totalAmount).toFixed(2)}
            <Currency locale={locale} />
          </ResultTitle>
          <BlueButton type="button">Сплатити</BlueButton>
        </>
      ) : (
        <>
          <Img src={EMPTY_CART} alt="empty cart" />
          <EmptyTitle>Нажаль в кошику немає товарів.</EmptyTitle>
          <EmptyTitle>Оберіть категорію.</EmptyTitle>
        </>
      )}
    </>
  );
};
