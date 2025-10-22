import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useAuth } from 'hooks/useAuth';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { forcedLogout } from 'store/auth/slice';

export const Layout = () => {
  const { authError } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      const { message, status } = authError;
      if (!message) return;

      if (message === 'Unable to fetch user') return;

      Notify.init({
        fontFamily: 'Roboto Mono',
        timeout: 4000,
        clickToClose: true,
        warning: {
          background: '#ff5549'
        }
      });

      if (status === 403) {
        dispatch(forcedLogout());
      }

      if (
        message === 'Invalid token' ||
        message === 'Unsupported token' ||
        (status === 401 && message !== 'Email or password invalid')
      ) {
        Notify.warning('Please login again');
        return;
      }

      Notify.warning(`${authError.message}`);
    }
  }, [dispatch, authError]);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
