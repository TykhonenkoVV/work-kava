import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useAuth } from 'hooks/useAuth';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { forcedLogout } from 'store/auth/slice';
import { Modal } from './Modal/Modal';
import { WKForm } from './WKForm/WKForm';
import { getFormElements, getFormText } from 'services/formServices';

export const Layout = () => {
  const { authError, user } = useAuth();
  const { locale } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      const { message, status } = authError;
      if (!message) return;

      if (message === 'Unable to fetch user' && status === 404) return;
      if (message === 'Unauthorized' && status === 401) return;
      if (message === 'Cannot GET /api/auth/refresh' && status === 404) return;

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

      if (message === 'Invalid token' || message === 'Unsupported token') {
        Notify.warning('Please login again');
        return;
      }

      Notify.warning(`${authError.message}`);
    }
  }, [dispatch, authError]);

  const [inputs, setInputs] = useState(null);
  const [formText, setFormText] = useState(null);

  useEffect(() => {
    setInputs(getFormElements(locale, 'book_workplace'));
    setFormText(getFormText(locale, 'book_workplace'));
  }, [locale]);

  const submit = data => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Modal>
        {formText && (
          <WKForm
            text={formText}
            inputs={inputs}
            locale={locale}
            onFormSubmit={submit}
          />
        )}
      </Modal>
    </>
  );
};
