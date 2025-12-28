import { WKForm } from 'components/Global/WKForm/WKForm';
import {
  AuthChangeButton,
  AuthContainer,
  AuthFormCaption
} from './AuthFormModal.styled';
import { useAuth } from 'hooks/useAuth';
import { lang } from 'lang/lang';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'store/auth/operations';
import { getCart } from 'store/cart/operations';
import { SIGN_IN, SIGN_UP } from 'utils/constants';

export const AuthFormModal = ({ action }) => {
  const { locale, isRegistered, isLoggedIn } = useAuth();
  const [isAktive, setIsActive] = useState(SIGN_IN);
  const [newFormData, setNewFormData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered && newFormData) {
      dispatch(logIn(newFormData));
    }
  }, [dispatch, isRegistered, newFormData]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart());
      action();
    }
  }, [dispatch, action, isLoggedIn]);

  const onAuthChange = e => {
    const id = e.currentTarget.id;
    setIsActive(id);
  };

  const onSubmit = (formData, id) => {
    if (id === SIGN_UP) {
      dispatch(
        register({
          ...formData,
          locale: locale,
          avatarURL: false,
          avatarURLsmall: false
        })
      );
      setNewFormData({ email: formData.email, password: formData.password });
    }
    if (id === SIGN_IN) {
      dispatch(logIn(formData));
    }
  };

  return (
    <AuthContainer>
      <WKForm
        dataId={SIGN_IN}
        dataActive={isAktive === SIGN_IN}
        locale={locale}
        onFormSubmit={onSubmit}
      >
        <AuthFormCaption jsOrder={3}>
          {lang[locale].dont_have_an_account}
        </AuthFormCaption>
        <AuthChangeButton
          id={SIGN_UP}
          type="button"
          onClick={onAuthChange}
          jsOrder={4}
        >
          {lang[locale].register}
        </AuthChangeButton>
      </WKForm>
      <WKForm
        dataId={SIGN_UP}
        dataActive={isAktive === SIGN_UP}
        locale={locale}
        onFormSubmit={onSubmit}
      >
        <AuthFormCaption jsOrder={3}>
          {lang[locale].already_registered}
        </AuthFormCaption>
        <AuthChangeButton
          id={SIGN_IN}
          type="button"
          onClick={onAuthChange}
          jsOrder={4}
        >
          {lang[locale].login_to_profile}
        </AuthChangeButton>
      </WKForm>
    </AuthContainer>
  );
};
