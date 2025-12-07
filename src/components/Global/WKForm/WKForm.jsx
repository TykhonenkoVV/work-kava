import { Fragment, useEffect, useState } from 'react';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import {
  CheckBox,
  CheckBoxInput,
  CheckBoxLabelStyled,
  DataWrapper,
  DivlStyled,
  InputStyled,
  InputWrapper,
  LabelStyled,
  RightButton,
  WKErrorText,
  WKFromStyled,
  WKTitleStyled
} from './WKForm.styled';
import { BlueButton } from 'styles/buttonStyles';
import { WKSelect } from './Components/WKSelect/WKSelect';
import { Avatar } from './Components/Avatar/Avatar';
import { getFormElements, getFormText, validate } from 'services/formServices';

export const WKForm = ({
  dataId,
  dataActive,
  locale,
  onFormSubmit,
  selectCallback,
  defaultValues,
  children
}) => {
  const [errors, setErrors] = useState(null);
  const [inputs, setInputs] = useState(null);
  const [formText, setFormText] = useState(null);
  const [isFirst, setIsFirst] = useState(true);

  const [changeCheckBox, setChangeCheckBox] = useState();

  const [show, setShow] = useState({
    [`${dataId}_password`]: false,
    [`${dataId}_confirm_password`]: false
  });

  useEffect(() => {
    setInputs(getFormElements(locale, dataId));
    setFormText(getFormText(locale, dataId));
  }, [locale, dataId]);

  useEffect(() => {
    if (!isFirst) return;
    if (inputs) {
      setIsFirst(false);
      inputs.forEach(el => {
        if (el.type === 'checkbox') {
          setChangeCheckBox({ ...changeCheckBox, [el.name]: el.checked });
        }
      });
    }
  }, [inputs, isFirst, changeCheckBox]);

  const handleChangeCheckBox = e => {
    if (changeCheckBox?.[e.target.name]) {
      setChangeCheckBox({ [e.target.name]: false });
    } else {
      setChangeCheckBox({ [e.target.name]: true });
    }
  };

  const onShowChange = e => {
    const currentId = e.currentTarget.dataset.id;
    const ref = document.querySelector(`[data-ref=${currentId}]`);

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
      onFormSubmit(
        {
          ...objFormData,
          ...changeCheckBox
        },
        e.currentTarget.dataset.id
      );
    }
  };

  return (
    <WKFromStyled
      onSubmit={handleSubmit}
      autoComplete="off"
      data-id={dataId}
      data-active={dataActive}
    >
      <>
        {children}
        <WKTitleStyled>{formText?.title}</WKTitleStyled>
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
              read_only,
              dependent
            }) => (
              <Fragment key={jsOrder}>
                {component === 'input' && (
                  <>
                    {type === 'checkbox' && changeCheckBox ? (
                      <CheckBoxLabelStyled jsOrder={jsOrder}>
                        <CheckBoxInput
                          hidden
                          defaultValue={'checked'}
                          name={name}
                          type={type}
                          checked={changeCheckBox?.[name]}
                          onChange={handleChangeCheckBox}
                        />
                        <CheckBox />
                        {caption}
                      </CheckBoxLabelStyled>
                    ) : type === 'file' ? (
                      <Avatar />
                    ) : (
                      <LabelStyled jsOrder={jsOrder}>
                        <InputWrapper>
                          <InputStyled
                            defaultValue={
                              defaultValues?.[name] ? defaultValues[name] : null
                            }
                            autoComplete="off"
                            data-ref={`${dataId}_${name}`}
                            name={name}
                            type={type}
                            readOnly={read_only}
                            placeholder={placeholder}
                            disabled={
                              dependent ? !changeCheckBox?.change_pass : false
                            }
                          />
                          <SvgIcon
                            w={24}
                            h={24}
                            icon={icon}
                            className="js-class"
                          />
                          {icon_animated && (
                            <RightButton
                              data-id={`${dataId}_${name}`}
                              type="button"
                              onClick={onShowChange}
                            >
                              {icon_animated.action === 'change' && (
                                <SvgIcon
                                  w={24}
                                  h={24}
                                  icon={
                                    !show[`${dataId}_${name}`]
                                      ? icon_animated.iconDenied
                                      : icon_animated.iconAllow
                                  }
                                  className="js-class"
                                />
                              )}
                            </RightButton>
                          )}
                          {errors?.[name] && (
                            <WKErrorText>{errors[name]}</WKErrorText>
                          )}
                        </InputWrapper>
                      </LabelStyled>
                    )}
                  </>
                )}
                {component === 'select' && (
                  <DivlStyled jsOrder={jsOrder}>
                    <WKSelect
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      icon={icon}
                      icon_animated={icon_animated}
                      options={options}
                      selectCallback={selectCallback}
                      locale={locale}
                    >
                      {errors?.[name] && (
                        <WKErrorText>{errors[name]}</WKErrorText>
                      )}
                    </WKSelect>
                  </DivlStyled>
                )}
              </Fragment>
            )
          )}
        </DataWrapper>
        <BlueButton type="submit" disabled={false} style={{ order: 2 }}>
          {formText?.button_text}
        </BlueButton>
      </>
    </WKFromStyled>
  );
};
