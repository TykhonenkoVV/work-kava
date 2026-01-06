import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from 'store/cart/operations';
import { selectHistory } from 'store/cart/selectors';
import {
  CartLink,
  EmptyTitle,
  HistoryLinkWrapper,
  HistoryTitle,
  Img
} from './HistoryContent.styled';
import { lang } from 'lang/lang';
import { EMPTY_CART } from 'utils/constants';
import { Receipt } from './Components/Receipt/Receipt';

export const HistoryContent = () => {
  const { locale } = useAuth();
  const dispatch = useDispatch();
  const history = useSelector(selectHistory);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  return (
    <>
      {Object.keys(history).length > 0 ? (
        <>
          <HistoryLinkWrapper>
            <CartLink to="/cart">{lang[locale].cart}</CartLink>
            <HistoryTitle className="active">
              {lang[locale].history}
            </HistoryTitle>
          </HistoryLinkWrapper>
          {Object.keys(history).map(el => (
            <Receipt key={el} products={history[el]} receipt={el} />
          ))}
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
