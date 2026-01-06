import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { clearError, forcedLogout } from 'store/auth/slice';
import { Loader } from './Loader/Loader';
import { useModal } from 'hooks/useModal';
import { Modal } from './Modal/Modal';
import { InfoModal } from './InfoModal/InfoModal';

export const Layout = () => {
  const { isRefreshing, authError } = useAuth();
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (authError) {
      const { message, status } = authError;
      if (!message) return;

      if (message === 'Unable to fetch user' && status === 404) return;
      if (message === 'Unable to fetch cart' && status === 404) return;
      if (message === 'Unauthorized' && status === 401) return;
      if (message === 'Cannot GET /api/auth/refresh' && status === 404) return;

      if (status === 403) {
        dispatch(forcedLogout());
      }

      if (message === 'Invalid token' || message === 'Unsupported token') {
        setErrors('Please login again');
        openModal();
        return;
      }

      setErrors(authError.message);
      openModal();
    }
  }, [dispatch, authError, openModal]);

  const handleCloseInfoModal = () => {
    closeModal();
    dispatch(clearError());
  };

  return (
    <>
      {isRefreshing && <Loader />}
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isModalOpen && (
        <Modal onClose={handleCloseInfoModal}>
          <InfoModal
            type="reject"
            text={errors}
            onClose={handleCloseInfoModal}
          />
        </Modal>
      )}
    </>
  );
};
