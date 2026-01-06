import { useAuth } from 'hooks/useAuth';
import { WKForm } from 'components/Global/WKForm/WKForm';
import { useDispatch } from 'react-redux';
import { logOut, updateUser } from 'store/auth/operations';
import { orderForm } from 'services/formServices';
import { Loader } from 'components/Global/Loader/Loader';
import { useEffect } from 'react';
import { turnOffIsUpdated } from 'store/auth/slice';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { ButtonLogOut } from './Profile.styled';
import { clearCart, clearProducts } from 'store/cart/slice';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { InfoModal } from 'components/Global/InfoModal/InfoModal';
import { lang } from 'lang/lang';

export const Profile = ({ action }) => {
  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { locale, isRefreshing, isUpdated, user } = useAuth();
  const { name, email } = user;

  const defaultValues = {
    name: name,
    email: email
  };

  const handleSubmit = formData => {
    const isOrderedForm = orderForm(formData, defaultValues);
    if (!isOrderedForm) return openModal();
    dispatch(updateUser(isOrderedForm));
  };

  useEffect(() => {
    if (isUpdated) {
      dispatch(turnOffIsUpdated());
      action();
    }
  }, [dispatch, isUpdated, action]);

  const onLogOut = () => {
    dispatch(logOut());
    dispatch(clearProducts());
    dispatch(clearCart());
    action();
  };

  return (
    <>
      {isRefreshing && <Loader />}
      <WKForm
        dataId="edit-profile"
        locale={locale}
        defaultValues={defaultValues}
        onFormSubmit={handleSubmit}
      >
        <ButtonLogOut onClick={onLogOut} jsOrder={3}>
          <SvgIcon w={24} h={24} icon={'log-out'} />
          Logout
        </ButtonLogOut>
      </WKForm>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <InfoModal
            type="warning"
            text={lang[locale].nothing_has_changed}
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};
