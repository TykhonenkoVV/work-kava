import { WhiteButton } from 'styles/buttonStyles';
import {
  FormBox,
  FormTitle,
  FormWrapper,
  SubscribeFormInput
} from './SubscribeForm.styled';
import { ErrorText } from 'components/BookForm/BookForm.styled';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { useRef, useState } from 'react';
import { validate } from 'utils/ValidateForm';

export const SubscribeForm = ({ action }) => {
  const { locale } = useSelector(selectUser);
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
