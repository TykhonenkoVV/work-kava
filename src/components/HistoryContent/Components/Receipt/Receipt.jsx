import { Currency } from 'components/Global/Currency/Currency';
import {
  ReceiptBox,
  ReceiptDate,
  ReceiptList,
  ReceiptNumber,
  ResultTitle
} from './Receipt.styled';
import { useAuth } from 'hooks/useAuth';
import { HistoryProduct } from '../HistoryProduct/HistoryProduct';
import { lang } from 'lang/lang';
import { useEffect, useState } from 'react';
import { totalPrice } from 'services/cartServices';
import { formatDate } from 'services/historyServices';

export const Receipt = ({ products, receipt }) => {
  const { locale, shortLocale } = useAuth();
  const [totalAmount, setTotalAmount] = useState();
  const date = formatDate(
    new Date(Number(receipt.slice(3, receipt.length)) * 1000),
    'DD.MM.YYYY',
    locale
  );

  useEffect(() => {
    setTotalAmount(totalPrice(products, shortLocale));
  }, [products, shortLocale]);

  return (
    <ReceiptBox>
      <ReceiptList>
        <ReceiptNumber>№ {receipt}</ReceiptNumber>
        <ReceiptDate>{date}</ReceiptDate>
        {products.map(product => (
          <HistoryProduct key={product._id} product={product} />
        ))}
      </ReceiptList>
      <ResultTitle>
        {lang[locale].total} {Number(totalAmount).toFixed(2)}
        <Currency locale={locale} />
      </ResultTitle>
    </ReceiptBox>
  );
};
