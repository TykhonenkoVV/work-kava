import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import {
  AuthChangeButton,
  AuthFormCaption,
  AuthInput,
  AuthInputWrapper,
  AuthTitle,
  AuthWrapper,
  CheckBox,
  CheckBoxInput,
  CheckBoxInputWrapper,
  StyledAuthForm
} from './AuthForm.styled';
import { BlueButton } from 'styles/buttonStyles';
import { iconsStyles } from 'utils/commonUtils';
import { useEffect, useState } from 'react';
import { validate } from 'utils/ValidateForm';
import { lang } from 'lang/lang';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'store/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { ErrorText } from 'components/Global/ErrorText/ErrorText';

export const AuthForm = ({
  action,
  forwardedRef,
  dataActive,
  onChangeAuth,
  text,
  dataId
}) => {
  const { user, isRegistered, isLoggedIn } = useAuth();
  const { locale } = user;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [validFormData, setValidFormData] = useState(false);

  useEffect(() => {
    if (isRegistered) {
      if (validFormData)
        dispatch(
          logIn({
            email: validFormData.email,
            password: validFormData.password
          })
        );
    }
  }, [isRegistered, dispatch, validFormData]);

  useEffect(() => {
    if (isLoggedIn) action();
  }, [isLoggedIn, action]);

  const [errors, setErrors] = useState();

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(forwardedRef?.current);
    const objFormData = Object.fromEntries(formData);
    if (dataId === 'sign-up') {
      const respons = validate(objFormData, locale);
      if (Object.keys(respons).length !== 0) {
        setErrors(respons);
      } else {
        setValidFormData(objFormData);
        dispatch(
          register({
            ...objFormData,
            locale,
            avatarURL: null,
            avatarURLsmall: null
          })
        );
      }
    } else {
      dispatch(logIn(objFormData));
    }
  };

  const handleChangeAuth = e => {
    forwardedRef?.current?.reset();
    setErrors({});
    onChangeAuth(e);
  };

  return (
    <StyledAuthForm
      data-active={dataActive}
      data-id={dataId}
      autoComplete="off"
      ref={forwardedRef}
      onSubmit={handleSubmit}
    >
      <AuthTitle>{text.title}</AuthTitle>
      <AuthWrapper data-id={dataId}>
        {dataId === 'sign-up' && (
          <>
            <AuthInputWrapper>
              <AuthInput
                autoComplete="off"
                name="name"
                type="text"
                placeholder={lang[locale].enter_name}
                onChange={onChange}
              />
              <SvgIcon w={28} h={28} icon={'user'} style={iconsStyles} />
            </AuthInputWrapper>
            {errors?.username && <ErrorText text={errors.username} />}
          </>
        )}
        <AuthInputWrapper>
          <AuthInput
            autoComplete="off"
            name="email"
            type="text"
            placeholder={lang[locale].enter_email}
            onChange={onChange}
          />
          <SvgIcon w={28} h={28} icon={'at'} style={iconsStyles} />
        </AuthInputWrapper>
        {errors?.email && <ErrorText text={errors.email} />}
        <AuthInputWrapper>
          <AuthInput
            autoComplete="off"
            name="password"
            type="password"
            placeholder={lang[locale].enter_pass}
            onChange={onChange}
          />
          <SvgIcon w={28} h={28} icon={'pass'} style={iconsStyles} />
        </AuthInputWrapper>
        {errors?.password && <ErrorText text={errors.password} />}
        {dataId !== 'sign-up' && (
          <CheckBoxInputWrapper>
            <CheckBoxInput type="checkbox" hidden name="stay_logged_in" />
            <CheckBox />
            {lang[locale].remember_me}
          </CheckBoxInputWrapper>
        )}
      </AuthWrapper>
      <BlueButton type="submit">{lang[locale].continue}</BlueButton>
      <AuthFormCaption>{text.caption}</AuthFormCaption>
      <AuthChangeButton
        data-id={dataId}
        type="button"
        onClick={handleChangeAuth}
      >
        {text.change}
      </AuthChangeButton>
    </StyledAuthForm>
  );
};
