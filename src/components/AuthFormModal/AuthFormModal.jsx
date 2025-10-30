import { useRef } from 'react';
import { AuthForm } from './Components/AuthForm/AuthForm';
import { AuthContainer } from './AuthFormModal.styled';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const AuthFormModal = ({ action }) => {
  const { locale } = useSelector(selectUser);

  const signInFormRef = useRef(null);
  const signUpFormRef = useRef(null);

  const handleChangeAuthClick = e => {
    const id = e.target.dataset.id;
    if (id === 'sign-in') {
      signInFormRef.current.setAttribute('data-active', false);
      signUpFormRef.current.setAttribute('data-active', true);
    } else {
      signInFormRef.current.setAttribute('data-active', true);
      signUpFormRef.current.setAttribute('data-active', false);
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthForm
          action={action}
          text={{
            title: lang[locale].login_to_profile,
            caption: lang[locale].dont_have_an_account,
            change: lang[locale].select_sign_up
          }}
          dataId="sign-in"
          dataActive
          forwardedRef={signInFormRef}
          onChangeAuth={handleChangeAuthClick}
        />
        <AuthForm
          action={action}
          text={{
            title: lang[locale].register,
            caption: lang[locale].already_registered,
            change: lang[locale].select_sign_in
          }}
          dataId="sign-up"
          forwardedRef={signUpFormRef}
          onChangeAuth={handleChangeAuthClick}
        />
      </AuthContainer>
    </>
  );
};
