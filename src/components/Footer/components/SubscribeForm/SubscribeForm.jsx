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
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Global/Modal/Modal';
import { InfoModal } from 'components/Global/InfoModal/InfoModal';

export const SubscribeForm = ({ action }) => {
  const { locale } = useAuth();
  const formRef = useRef(null);

  const [state, setState] = useState({
    email: ''
  });

  const { isModalOpen, openModal, closeModal } = useModal();
  const [errors, setErrors] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(formRef?.current);
    const objFormData = Object.fromEntries(formData);
    const response = validate(objFormData, locale);
    if (Object.keys(response).length !== 0) setErrors(response);
    else {
      e.target.reset();
      setErrors(null);
      openModal();
    }
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
        {errors?.email && <ErrorText text={errors.email} />}
        <WhiteButton type="submit" action={action} title={'Subscribe'}>
          {lang[locale].subscribe}
        </WhiteButton>
      </FormBox>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <InfoModal
            type={'fulfilled'}
            text={lang[locale].subscribed}
            onClose={closeModal}
          />
        </Modal>
      )}
    </FormWrapper>
  );
};
