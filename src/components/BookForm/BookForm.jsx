import { useState } from 'react';
import { PriceText } from './BookForm.styled';
import { lang } from 'lang/lang';
import { WKForm } from 'components/Global/WKForm/WKForm';
import { useAuth } from 'hooks/useAuth';
import { LOCALE_DE, LOCALE_EN, LOCALE_UA } from 'utils/constants';
import { useDispatch } from 'react-redux';
import { addProductToCart } from 'store/cart/operations';
import { createNewProduct } from 'services/cartServices';

export const BookForm = ({ action, room }) => {
  const dispatch = useDispatch();

  const { locale, shortLocale, user } = useAuth();

  const [count, setCount] = useState(0);

  const updatePrice = count => {
    setCount(Number(count));
  };

  const handleSubmit = formData => {
    let res = {};
    res.count = Number(formData.hours_selector);
    res.date = formData.picker.split('.').reverse().join('-');
    res.archived = false;
    res.category = 'rooms';
    res.productId = room._id;
    const newProduct = createNewProduct(res, room);
    dispatch(addProductToCart(newProduct));
  };

  return (
    <WKForm
      dataId={room?.en?.title}
      locale={locale}
      onFormSubmit={handleSubmit}
      selectCallback={updatePrice}
      defaultValues={{ name: user.name }}
      children
    >
      <PriceText jsOrder={2}>
        {lang[locale].price}: {count * room[shortLocale].price}
        {locale === LOCALE_EN && <span>&#36;</span>}
        {locale === LOCALE_DE && <span>&#8364;</span>}
        {locale === LOCALE_UA && <span>&#8372;</span>}
      </PriceText>
    </WKForm>
  );
};
