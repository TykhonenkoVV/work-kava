import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from 'store/cart/operations';
import { selectProducts } from 'store/cart/selectors';
import { clearCart } from 'store/cart/slice';

export const CartModal = (product, position) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (!isFirst) return;
    setIsFirst(false);
    dispatch(clearCart());
    products.forEach(el => {
      dispatch(getProductById({ category: el.category, id: el.productId }));
    });
  }, [isFirst, products, dispatch]);

  //   const onPay = () => {
  //     let res = {};
  //     if (position === 1) {
  //       if (product.price_standart_en) {
  //         res.price_en = product.price_standart_en;
  //         res.price_de = product.price_standart_de;
  //         res.price_ua = product.price_standart_ua;
  //       }
  //       if (product.price_en) {
  //         res.price_en = product.price_en;
  //         res.price_de = product.price_de;
  //         res.price_ua = product.price_ua;
  //       }
  //     } else if (position === 2) {
  //       if (product.price_double_en) {
  //         res.price_en = product.price_double_en;
  //         res.price_de = product.price_double_de;
  //         res.price_ua = product.price_double_ua;
  //       } else if (product.price_xl_en) {
  //         res.price_en = product.price_xl_en;
  //         res.price_de = product.price_xl_de;
  //         res.price_ua = product.price_xl_ua;
  //       }
  //     }
  //   };

  return (
    <>
      {products.map(product => (
        <Fragment key={product._id}>
          <div>{product._id}</div>
          <div>
            {product.count} * {product.price_en}
          </div>
        </Fragment>
      ))}
    </>
  );
};
