import { Fragment, useState } from 'react';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import {
  CheckBox,
  CheckBoxInput,
  CheckBoxLabelStyled,
  DataWrapper,
  InputStyled,
  LabelStyled,
  PickerWrapper,
  RightButton,
  WKErrorText,
  WKFromStyled,
  WKTitleStyled
} from './WKForm.styled';
import { BlueButton } from 'styles/buttonStyles';
import { validate } from 'utils/ValidateForm';
import { WKSelect } from './Components/Options/WKSelect';
import { Calendar } from './Components/Calendar/Calendar';
import { formatDate } from './Components/Calendar/helpers/formatDate';

export const WKForm = ({ text, inputs, locale, onFormSubmit, children }) => {
  const { title, button_text } = text;
  const [errors, setErrors] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [pickerValue, setPickerValue] = useState(false);
  const [show, setShow] = useState({
    password: false,
    confirm_password: false
  });

  const [changeCheckBox, setChangeCheckBox] = useState(false);
  const [selectedDate, setSelectedDay] = useState(new Date());

  const handleChangeCheckBox = e => {
    setChangeCheckBox({ [e.target.name]: e.target.checked });
  };

  const onShowChange = e => {
    const currentId = e.currentTarget.dataset.id;
    const ref = document.getElementById(currentId);

    if (!ref) return;
    if (!show[currentId]) {
      ref.type = 'text';
    } else {
      ref.type = 'password';
    }
    setShow({ ...show, [currentId]: !show[currentId] });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const objFormData = Object.fromEntries(formData);
    const respons = validate(objFormData, locale);
    if (Object.keys(respons).length !== 0) {
      setErrors(respons);
    } else {
      setErrors(null);
      onFormSubmit({ ...objFormData, ...changeCheckBox });
    }
  };

  const onOptionsChanges = value => {
    setIsActive({ ...isActive, ...value });
  };

  const onClosePicker = date => {
    setPickerValue(formatDate(date, 'DDD DD MMM YYYY', locale));
    setIsActive({ ...isActive, picker: false });
  };

  return (
    <WKFromStyled onSubmit={handleSubmit} autoComplete="off">
      <WKTitleStyled>{title}</WKTitleStyled>
      {children}
      <DataWrapper>
        {inputs?.map(
          ({
            component,
            name,
            type,
            options,
            placeholder,
            icon,
            icon_animated,
            jsOrder,
            caption,
            read_only
          }) => (
            <Fragment key={jsOrder}>
              {component === 'input' && (
                <>
                  {type === 'checkbox' ? (
                    <CheckBoxLabelStyled jsOrder={jsOrder}>
                      <CheckBoxInput
                        hidden
                        name={name}
                        type={type}
                        onChange={handleChangeCheckBox}
                      />
                      <CheckBox />
                      {caption}
                    </CheckBoxLabelStyled>
                  ) : (
                    <LabelStyled jsOrder={jsOrder}>
                      <InputStyled
                        autoComplete="off"
                        id={name}
                        name={name}
                        type={type}
                        readOnly={read_only}
                        placeholder={placeholder}
                      />
                      <SvgIcon w={28} h={28} icon={icon} />
                      {icon_animated && (
                        <RightButton
                          data-id={name}
                          type="button"
                          onClick={onShowChange}
                        >
                          {icon_animated.action === 'change' && (
                            <SvgIcon
                              w={28}
                              h={28}
                              icon={
                                !show[name]
                                  ? icon_animated.iconDenied
                                  : icon_animated.iconAllow
                              }
                            />
                          )}
                        </RightButton>
                      )}
                      {errors?.[name] && (
                        <WKErrorText>{errors[name]}</WKErrorText>
                      )}
                    </LabelStyled>
                  )}
                </>
              )}
              {component === 'select' && (
                <>
                  <WKSelect
                    jsOrder={jsOrder}
                    name={name}
                    placeholder={placeholder}
                    icon={icon}
                    icon_animated={icon_animated}
                    onOptionsChanges={onOptionsChanges}
                    options={options}
                    pickerValue={pickerValue}
                  />

                  {name === 'picker' && (
                    <PickerWrapper
                      className={isActive.picker ? null : 'hidden'}
                    >
                      <Calendar
                        locale={locale}
                        selectDate={date => setSelectedDay(date)}
                        selectedDate={selectedDate}
                        firstWeekDayNumber={(locale === 'en-UK' && 1) || 2}
                        onClose={onClosePicker}
                      />
                    </PickerWrapper>
                  )}
                </>
              )}
            </Fragment>
          )
        )}
        <BlueButton type="submit" disabled={false} style={{ order: 100 }}>
          {button_text}
        </BlueButton>
      </DataWrapper>
    </WKFromStyled>
  );
};
