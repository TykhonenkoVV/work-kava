import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Global/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'store/auth/operations';
import { getCart } from 'store/cart/operations';
import {
  CAFE_PATH,
  CART_PATH,
  COWORKING_PATH,
  FASTFOOD_PATH,
  HISTORY_PATH
} from 'utils/constants';
import { PrivateRoute } from './Global/privateRoute';

const HomePage = lazy(() => import('pages/Home.jsx'));
const CafePage = lazy(() => import('pages/Cafe.jsx'));
const FastfoodPage = lazy(() => import('pages/Fastfood.jsx'));
const CoworkingPage = lazy(() => import('pages/Coworking.jsx'));
const CartPage = lazy(() => import('pages/Cart.jsx'));
const HistoryPage = lazy(() => import('pages/History.jsx'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={CAFE_PATH} element={<CafePage />} />
        <Route path={FASTFOOD_PATH} element={<FastfoodPage />} />
        <Route path={COWORKING_PATH} element={<CoworkingPage />} />
        <Route
          path={CART_PATH}
          element={<PrivateRoute redirectTo="/" component={<CartPage />} />}
        />
        <Route
          path={HISTORY_PATH}
          element={<PrivateRoute redirectTo="/" component={<HistoryPage />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
