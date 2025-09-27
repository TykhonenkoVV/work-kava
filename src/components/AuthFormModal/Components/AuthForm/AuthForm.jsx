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
  ErrorText,
  StyledAuthForm
} from './AuthForm.styled';
import { BlueButton } from 'styles/buttonStyles';
import { iconsStyles } from 'utils/commonUtils';
import { useState } from 'react';
import { validate } from 'utils/ValidateForm';

export const AuthForm = ({
  forwardedRef,
  dataActive,
  onChangeAuth,
  text,
  className
}) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState();

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(forwardedRef?.current);
    const objFormData = Object.fromEntries(formData);
    console.log(objFormData);

    // validate(objFormData);
    setErrors(validate(objFormData));
  };

  return (
    <StyledAuthForm
      data-active={dataActive}
      className={className}
      autoComplete="off"
      ref={forwardedRef}
      onSubmit={handleSubmit}
    >
      <AuthTitle>{text.title}</AuthTitle>
      <AuthWrapper className={className}>
        {className === 'sign-up' && (
          <>
            <AuthInputWrapper>
              <AuthInput
                autoComplete="off"
                name="username"
                type="text"
                placeholder="Enter your name"
                onChange={onChange}
              />
              <SvgIcon w={28} h={28} icon={'user'} style={iconsStyles} />
            </AuthInputWrapper>
            {errors?.username && <ErrorText>{errors?.username}</ErrorText>}
          </>
        )}
        <AuthInputWrapper>
          <AuthInput
            autoComplete="off"
            name="email"
            type="text"
            placeholder="Entet your e-mail"
            onChange={onChange}
          />
          <SvgIcon w={28} h={28} icon={'at'} style={iconsStyles} />
        </AuthInputWrapper>
        {errors?.email && <ErrorText>{errors?.email}</ErrorText>}
        <AuthInputWrapper>
          <AuthInput
            autoComplete="off"
            name="password"
            type="password"
            placeholder="Entet your e-mail"
            onChange={onChange}
          />
          <SvgIcon w={28} h={28} icon={'pass'} style={iconsStyles} />
        </AuthInputWrapper>
        {errors?.password && <ErrorText>{errors?.password}</ErrorText>}
        {className !== 'sign-up' && (
          <CheckBoxInputWrapper>
            <CheckBoxInput type="checkbox" hidden name="checkbox" />
            <CheckBox />
            Remember me
          </CheckBoxInputWrapper>
        )}
      </AuthWrapper>
      <BlueButton type="submit">Continue</BlueButton>
      <AuthFormCaption>{text.caption}</AuthFormCaption>
      <AuthChangeButton type="button" onClick={onChangeAuth}>
        {text.change}
      </AuthChangeButton>
    </StyledAuthForm>
  );
};
