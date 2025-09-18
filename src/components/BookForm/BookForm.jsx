import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { HoursSelector } from './HoursSelector';
import { GetBookingInfo } from 'utils/commonUtils';

import {
  CloseButton,
  ContentWrapper,
  ErrorText,
  Form,
  FormTitle,
  InputWrapper,
  Input,
  PriceText
} from './BookForm.styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { BlueButton } from 'styles/buttonStyles';
import { Picker } from './Components/Picker/Picker';

export const BookForm = ({ action, bookType }) => {
  const { price, title } = GetBookingInfo(bookType);

  const [phoneNumber, setphoneNumber] = useState('');

  const [bookingPrice, setBookingPrice] = useState(price);

  const [isActive, setIsActive] = useState(false);

  // const [selectedDate, setSelectedDay] = useState(new Date());

  const updatePrice = hours => {
    setBookingPrice(hours * price);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();
  return (
    <ModalContent>
      <CloseButton type="button" aria-label="close" onClick={action}>
        <Svg w={36} h={36} icon="close" />
      </CloseButton>
      <Form
        onSubmit={handleSubmit(data => {
          console.log({ ...data, bookType, bookingPrice });
          action();
        })}
        autoComplete="off"
      >
        <FormTitle>{title}</FormTitle>
        <ContentWrapper>
          <InputWrapper>
            <Input
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name'
                },
                pattern: {
                  value: /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+/gm,
                  message: 'The name must contain only letters and spaces'
                }
              })}
              placeholder="Enter your name"
            />
            <Svg
              w={28}
              h={28}
              icon={'user'}
              style={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translateY(-50%)'
              }}
            />
          </InputWrapper>

          {errors.name?.message && (
            <ErrorText>{errors.name?.message}</ErrorText>
          )}
          <InputWrapper>
            <Controller
              control={control}
              name="phone"
              rules={{
                validate: value => {
                  return value?.length === 19;
                }
              }}
              render={({ field: { ref, ...field } }) => (
                <Input
                  as={IMaskInput}
                  {...field}
                  mask={'+{38} (000) 000-00-00'}
                  placeholder="+38 (___) ___ - __ - __"
                  value={phoneNumber}
                  onAccept={(value, mask) => setphoneNumber(value)}
                />
              )}
            />
            <Svg
              w={28}
              h={28}
              icon={'phone'}
              style={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translateY(-50%)'
              }}
            />
          </InputWrapper>
          {errors.phone && <ErrorText>Please enter correct phone</ErrorText>}
          <InputWrapper
            data-picker
            data-active={isActive || null}
            onClick={e => {
              setIsActive(!isActive);
            }}
          >
            <Input type="text" readOnly="readonly" placeholder="Select date" />
            <Svg w={28} h={28} icon={'calendar'} />
            <Svg className="rotate" w={28} h={28} icon="arrow" />
            <Picker />
          </InputWrapper>
          <HoursSelector bookType={bookType} onHoursChanges={updatePrice} />
        </ContentWrapper>
        <PriceText>Price: {bookingPrice} ₴</PriceText>

        <BlueButton type="submit">Book now</BlueButton>
      </Form>
    </ModalContent>
  );
};
