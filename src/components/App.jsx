import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Layout } from './Global/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'store/auth/operations';

const HomePage = lazy(() => import('pages/Home.jsx'));
const CafePage = lazy(() => import('pages/Cafe.jsx'));
const FastfoodPage = lazy(() => import('pages/Fastfood.jsx'));
const CoworkingPage = lazy(() => import('pages/Coworking.jsx'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/fastfood" element={<FastfoodPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
