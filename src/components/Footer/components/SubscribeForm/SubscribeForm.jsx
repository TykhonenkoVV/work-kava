import { WhiteButton } from 'styles/buttonStyles';
import {
  FormBox,
  FormTitle,
  FormWrapper,
  SubscribeFormInput
} from './SubscribeForm.styled';
import { lang } from 'lang/lang';
import { useRef, useState } from 'react';
import { ErrorText } from 'components/Global/ErrorText/ErrorText';
import { validate } from 'services/formServices';
import { useAuth } from 'hooks/useAuth';

export const SubscribeForm = ({ action }) => {
  const { locale } = useAuth();
  const formRef = useRef(null);

  const [state, setState] = useState({
    email: ''
  });

  const [errors, setErrors] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(formRef?.current);
    const objFormData = Object.fromEntries(formData);
    setErrors(validate(objFormData, locale));
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <FormWrapper>
      <FormTitle>{lang[locale].subscribe}</FormTitle>
      <FormBox ref={formRef} onSubmit={handleSubmit}>
        <SubscribeFormInput
          autoComplete="off"
          type="text"
          name="email"
          placeholder={lang[locale].enter_email}
          onChange={onChange}
        />
        {errors?.email && <ErrorText> {errors.email} </ErrorText>}
        <WhiteButton type="submit" action={action} title={'Subscribe'}>
          {lang[locale].subscribe}
        </WhiteButton>
      </FormBox>
    </FormWrapper>
  );
};
