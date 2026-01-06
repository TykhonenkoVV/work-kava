import { Currency } from 'components/Global/Currency/Currency';
import { ReceiptNumber, ReceiptWrapper, ResultTitle } from './Receipt.styled';
import { useAuth } from 'hooks/useAuth';
import { HistoryProduct } from '../HistoryProduct/HistoryProduct';
import { lang } from 'lang/lang';
import { useEffect, useState } from 'react';
import { totalPrice } from 'services/cartServices';

export const Receipt = ({ products, receipt }) => {
  const { locale, shortLocale } = useAuth();
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    setTotalAmount(totalPrice(products, shortLocale));
  }, [products, shortLocale]);

  return (
    <>
      <ReceiptWrapper>
        <ReceiptNumber>№ {receipt}</ReceiptNumber>
        {products.map(product => (
          <HistoryProduct key={product._id} product={product} />
        ))}
      </ReceiptWrapper>
      <ResultTitle>
        {lang[locale].total} {Number(totalAmount).toFixed(2)}
        <Currency locale={locale} />
      </ResultTitle>
    </>
  );
};
