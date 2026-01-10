import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, updateProductInCart } from 'store/cart/operations';
import { selectCart, selectProducts } from 'store/cart/selectors';
import {
  CartLinkWrapper,
  CartTitle,
  EmptyTitle,
  HistoryLink,
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
    setNewCart(createNewCarts(products, cart));
  }, [isLast, products, cart]);

  useEffect(() => {
    if (newCart?.length !== products.length) return;
    setTotalAmount(totalPrice(newCart, shortLocale));
  }, [newCart, products, shortLocale]);

  const handlePay = () => {
    newCart.forEach(el => {
      let price = { en: {}, de: {}, ua: {} };
      if (el.standart) {
        price.en.standart = el.en.standart;
        price.de.standart = el.de.standart;
        price.ua.standart = el.ua.standart;
      }
      if (el.xl) {
        price.en.xl = el.en.xl;
        price.de.xl = el.de.xl;
        price.ua.xl = el.ua.xl;
      }
      if (el.count) {
        price.en.price = el.en.price;
        price.de.price = el.de.price;
        price.ua.price = el.ua.price;
      }
      const date = new Date(Date.now());
      const receipt = `WK-${Math.floor(date / 1000)}`;
      dispatch(
        updateProductInCart({
          id: el._id,
          data: { archived: true, receipt, ...price }
        })
      );
    });
  };

  return (
    <>
      <CartLinkWrapper>
        <CartTitle>{lang[locale].cart}</CartTitle>
        <HistoryLink to="/history">{lang[locale].history}</HistoryLink>
      </CartLinkWrapper>
      {products.length > 0 ? (
        <>
          <ProductsWrapper>
            {newCart?.length === products.length &&
              newCart.map(product => (
                <Product key={product._id} product={product} />
              ))}
          </ProductsWrapper>
          <ResultTitle>
            {lang[locale].total} {Number(totalAmount).toFixed(2)}
            <Currency locale={locale} />
          </ResultTitle>
          <BlueButton type="button" onClick={handlePay}>
            Сплатити
          </BlueButton>
        </>
      ) : (
        <>
          <Img src={EMPTY_CART} alt="empty cart" />
          <EmptyTitle>{lang[locale].empty_cart}</EmptyTitle>
        </>
      )}
    </>
  );
};
