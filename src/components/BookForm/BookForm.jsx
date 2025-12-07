import { useState } from 'react';
import { GetBookingInfo } from 'utils/commonUtils';
import { PriceText } from './BookForm.styled';
import { lang } from 'lang/lang';
import { WKForm } from 'components/Global/WKForm/WKForm';
import { useAuth } from 'hooks/useAuth';

export const BookForm = ({ action, bookType }) => {
  const { locale } = useAuth();

  const [state, setState] = useState({
    username: '',
    phonenumber: '',
    picker: '',
    interval: ''
  });

  const { price } = GetBookingInfo(bookType);

  const updatePrice = count => {
    setState({ ...state, interval: count });
  };

  const handleSubmit = formData => {
    console.log('Formdata', formData);
  };

  return (
    <WKForm
      dataId={bookType}
      locale={locale}
      onFormSubmit={handleSubmit}
      selectCallback={updatePrice}
      children
    >
      <PriceText jsOrder={2}>
        {lang[locale].price}: {Number(state?.interval) * price}
        {locale === 'en-UK' && <span>&#36;</span>}
        {locale === 'de-DE' && <span>&#8364;</span>}
        {locale === 'uk-UA' && <span>&#8372;</span>}
      </PriceText>
    </WKForm>
  );
};
