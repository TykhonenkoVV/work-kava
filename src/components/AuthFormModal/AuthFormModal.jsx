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

export const AuthFormModal = ({ action }) => {
  const { locale, isRegistered, isLoggedIn } = useAuth();
  const [isAktive, setIsActive] = useState('sign-in');
  const [newFormData, setNewFormData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered && newFormData) {
      dispatch(logIn(newFormData));
    }
  }, [dispatch, isRegistered, newFormData]);

  useEffect(() => {
    if (isLoggedIn) action();
  }, [action, isLoggedIn]);

  const onAuthChange = e => {
    const id = e.currentTarget.id;
    setIsActive(id);
  };

  const onSubmit = (formData, id) => {
    if (id === 'sign-up') {
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
    if (id === 'sign-in') {
      dispatch(logIn(formData));
    }
  };

  return (
    <AuthContainer>
      <WKForm
        dataId="sign-in"
        dataActive={isAktive === 'sign-in'}
        locale={locale}
        onFormSubmit={onSubmit}
      >
        <AuthFormCaption jsOrder={3}>
          {lang[locale].dont_have_an_account}
        </AuthFormCaption>
        <AuthChangeButton
          id="sign-up"
          type="button"
          onClick={onAuthChange}
          jsOrder={4}
        >
          {lang[locale].register}
        </AuthChangeButton>
      </WKForm>
      <WKForm
        dataId="sign-up"
        dataActive={isAktive === 'sign-up'}
        locale={locale}
        onFormSubmit={onSubmit}
      >
        <AuthFormCaption jsOrder={3}>
          {lang[locale].already_registered}
        </AuthFormCaption>
        <AuthChangeButton
          id="sign-in"
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
