import { useRef } from 'react';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { AuthForm } from './Components/AuthForm/AuthForm';
import { AuthContainer, CloseButton } from './AuthFormModal.styled';

export const AuthFormModal = ({ action }) => {
  const signInFormRef = useRef(null);
  const signUpFormRef = useRef(null);

  const handleSubmit = () => {};

  const handleChangeAuthClick = e => {
    const text = e.target.innerHTML;
    // let isSignIn = signInFormRef.current.getAttribute('data-active');
    // let isSignUp = signUpFormRef.current.getAttribute('data-active');

    if (text === 'Sign up') {
      signInFormRef.current.setAttribute('data-active', false);
      signUpFormRef.current.setAttribute('data-active', true);
    } else {
      signInFormRef.current.setAttribute('data-active', true);
      signUpFormRef.current.setAttribute('data-active', false);
    }
  };

  // const handleSignUpClick = e => {
  //   signUpFormRef?.current?.classList.remove('active');
  //   signInFormRef?.current?.classList.add('active');
  // };

  return (
    <>
      <CloseButton type="button" aria-label="close" onClick={action}>
        <SvgIcon w={32} h={32} icon="close" />
      </CloseButton>
      <AuthContainer>
        <AuthForm
          text={{
            title: 'Login to profile',
            caption: "Don't have an account?",
            change: 'Sign up'
          }}
          className="sign-in"
          dataActive
          forwardedRef={signInFormRef}
          handleSubmit={handleSubmit}
          onChangeAuth={handleChangeAuthClick}
        />
        <AuthForm
          text={{
            title: 'Register',
            caption: 'Already registered?',
            change: 'Sign in'
          }}
          className="sign-up"
          forwardedRef={signUpFormRef}
          handleSubmit={handleSubmit}
          onChangeAuth={handleChangeAuthClick}
        />
      </AuthContainer>
    </>
  );
};
