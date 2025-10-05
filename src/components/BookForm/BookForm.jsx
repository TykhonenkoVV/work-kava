import { useRef, useState } from 'react';
import { GetBookingInfo, iconsStyles } from 'utils/commonUtils';

import {
  CloseButton,
  ContentWrapper,
  ErrorText,
  FormTitle,
  InputWrapper,
  Input,
  PriceText
} from './BookForm.styled';
import { BlueButton } from 'styles/buttonStyles';
import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { Calendar } from './Components/Calendar/Calendar';
import { formatDate } from './Components/Calendar/helpers/formatDate';
import { HoursSelector } from './Components/HoursSelector/HoursSelector';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';
import { validate } from 'utils/ValidateForm';

export const BookForm = ({ action, bookType }) => {
  const { locale } = useSelector(selectUser);
  const pickerInputRef = useRef(null);

  const [state, setState] = useState({
    username: '',
    phonenumber: '',
    picker: '',
    interval: ''
  });

  const [errors, setErrors] = useState();

  const bookFormRef = useRef(null);

  const { price, title } = GetBookingInfo(bookType);

  const [isActive, setIsActive] = useState();

  const [selectedDate, setSelectedDay] = useState(new Date());

  const updatePrice = count => {
    console.log('Count', count);

    setState({ ...state, interval: count });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(bookFormRef?.current);
    const objFormData = Object.fromEntries(formData);
    const isErrors = validate(objFormData, locale);
    setErrors(isErrors);
    if (Object.keys(isErrors).length === 0) {
      console.log('Formdata', objFormData);
    }
  };

  const callBack = date => {
    setIsActive(false);
    pickerInputRef.current.value = formatDate(date, 'DD.MM.YYYY');
  };

  return (
    <>
      <CloseButton type="button" aria-label="close" onClick={action}>
        <SvgIcon w={32} h={32} icon="close" />
      </CloseButton>
      <form autoComplete="off" onSubmit={handleSubmit} ref={bookFormRef}>
        <FormTitle>{lang[locale][title]}</FormTitle>
        <ContentWrapper>
          <InputWrapper>
            <Input
              autoComplete="off"
              name="username"
              type="text"
              placeholder={lang[locale].enter_name}
              onChange={onChange}
            />
            <SvgIcon w={28} h={28} icon={'user'} style={iconsStyles} />
          </InputWrapper>
          {errors?.username && <ErrorText>{errors?.username}</ErrorText>}
          <InputWrapper>
            <Input
              autoComplete="off"
              name="phonenumber"
              mask={'+{38} (000)000-00-00'}
              placeholder="+38 (___)___-__-__"
              onChange={onChange}
            />
            <SvgIcon w={28} h={28} icon={'phone'} style={iconsStyles} />
          </InputWrapper>
          {errors?.phonenumber && <ErrorText>{errors?.phonenumber}</ErrorText>}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <InputWrapper
              data-picker
              data-active={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <Input
                autoComplete="off"
                name="picker"
                type="text"
                readOnly="readonly"
                placeholder={lang[locale].select_date}
                ref={pickerInputRef}
                onChange={onChange}
              />
              <SvgIcon w={28} h={28} icon={'calendar'} />
              <SvgIcon className="rotate" w={28} h={28} icon="arrow" />
            </InputWrapper>
            {isActive && (
              <Calendar
                selectDate={date => setSelectedDay(date)}
                selectedDate={selectedDate}
                onClose={callBack}
                locale={locale}
                firstWeekDayNumber={(locale === 'en-UK' && 1) || 2}
              />
            )}
          </div>
          {errors?.picker && <ErrorText>{errors?.picker}</ErrorText>}
          <InputWrapper>
            <Input
              name="interval"
              type="hidden"
              readOnly
              value={state.interval}
            />
            <HoursSelector bookType={bookType} onHoursChanges={updatePrice} />
          </InputWrapper>
          {errors?.interval && <ErrorText>{errors?.interval}</ErrorText>}
        </ContentWrapper>
        <PriceText>
          {lang[locale].price}: {Number(state?.interval) * price}
          {locale === 'en-UK' && <span>&#36;</span>}
          {locale === 'de-DE' && <span>&#8364;</span>}
          {locale === 'uk-UA' && <span>&#8372;</span>}
        </PriceText>
        <BlueButton type="submit">{lang[locale].book_now}</BlueButton>
      </form>
    </>
  );
};
