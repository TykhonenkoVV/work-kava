import { useRef } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { AuthForm } from './Components/AuthForm/AuthForm';
import { AuthContainer, CloseButton } from './AuthFormModal.styled';
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
      <CloseButton type="button" aria-label="close" onClick={action}>
        <SvgIcon w={32} h={32} icon="close" />
      </CloseButton>
      <AuthContainer>
        <AuthForm
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
