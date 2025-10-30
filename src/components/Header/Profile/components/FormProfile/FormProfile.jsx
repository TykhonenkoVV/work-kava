import React, { useRef, useState } from 'react';
import {
  FromStyled,
  WrapperInput,
  BtnShowPassword,
  ProfileInput,
  CheckBoxInputWrapper,
  CheckBoxInput,
  CheckBox
} from './FormProfile.styled';
import { BlueButton } from 'styles/buttonStyles';
import { ErrorText } from 'components/BookForm/BookForm.styled';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { lang } from 'lang/lang';
import { useAuth } from 'hooks/useAuth';
import { AuthInputWrapper } from 'components/AuthFormModal/Components/AuthForm/AuthForm.styled';
import { validate } from 'utils/ValidateForm';

const iconAllow = 'eye-allow';
const iconDenied = 'eye-denied';

export const FormProfile = ({ onSubmit }) => {
  const formRef = useRef(null);
  const { user } = useAuth();
  const { locale, name, email } = user;
  const [errors, setErrors] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [changePass, setChangePass] = useState(false);

  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(formRef?.current);
    const objFormData = Object.fromEntries(formData);
    const respons = validate(objFormData, locale);
    if (Object.keys(respons).length !== 0) {
      setErrors(respons);
    } else {
      onSubmit(objFormData);
    }
  };

  return (
    <FromStyled ref={formRef} onSubmit={handleSubmit}>
      <AuthInputWrapper>
        <ProfileInput
          autoComplete="off"
          name="name"
          type="text"
          defaultValue={name}
          placeholder={lang[locale].enter_name}
          onChange={onChange}
        />
        <SvgIcon w={28} h={28} icon="user" className="icon" />
      </AuthInputWrapper>
      {errors?.name && <ErrorText>{errors?.name}</ErrorText>}
      <AuthInputWrapper>
        <ProfileInput
          autoComplete="off"
          name="email"
          type="text"
          defaultValue={email}
          placeholder={lang[locale].enter_email}
          onChange={onChange}
        />
        <SvgIcon w={28} h={28} icon="at" className="icon" />
      </AuthInputWrapper>
      {errors?.email && <ErrorText>{errors?.email}</ErrorText>}
      <CheckBoxInputWrapper>
        <CheckBoxInput type="checkbox" hidden name="change_pass" />
        <CheckBox />
        {lang[locale].change_pass}
      </CheckBoxInputWrapper>
      <WrapperInput>
        <AuthInputWrapper>
          <ProfileInput
            autoComplete="off"
            disabled={!changePass}
            name="password"
            type={!showPassword ? 'password' : 'text'}
            placeholder={lang[locale].enter_pass}
            onChange={onChange}
          />
          <SvgIcon w={28} h={28} icon="pass" className="icon" />
        </AuthInputWrapper>
        <BtnShowPassword
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <SvgIcon
            w={28}
            h={28}
            icon={!showPassword ? iconDenied : iconAllow}
          />
        </BtnShowPassword>
      </WrapperInput>
      {errors?.password && <ErrorText>{errors?.password}</ErrorText>}
      <BlueButton type="submit" disabled={false}>
        {lang[locale].save_changes}
      </BlueButton>
    </FromStyled>
  );
};
