import styled from '@emotion/styled';

export const WKErrorText = styled.p`
  margin-block-start: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.validationError};
`;

export const WKFromStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  &[data-id='sign-up'] {
    margin-inline-end: calc(-100% - 28px);
    &[data-active='true'] {
      margin-inline-end: 0;
    }
  }
  &[data-id='sign-in'] {
    margin-inline-start: calc(-100% - 28px);
    &[data-active='true'] {
      margin-inline-start: 0;
    }
  }
  transition: margin-inline-end ${({ theme }) => theme.baseTransition},
    margin-inline-start ${({ theme }) => theme.baseTransition};
`;

export const WKTitleStyled = styled.p`
  order: 0;
  margin-block-end: 20px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 28px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  order: 1;
  margin-block-end: 20px;
`;

export const LabelStyled = styled.label`
  order: ${({ jsOrder }) => jsOrder};
`;

export const DivlStyled = styled.div`
  order: ${({ jsOrder }) => jsOrder};
`;

export const InputWrapper = styled.div`
  position: relative;
  transition: fill ${({ theme }) => theme.baseTransition};
  & svg {
  }
  &:has(input:disabled) {
    & button {
      pointer-events: none;
    }
  }

  &:has(input:enabled) {
    fill: ${({ theme }) => theme.colors.darkGray};
    &:hover input {
      border-color: ${({ theme }) => theme.colors.accent};
    }
    &:hover {
      fill: ${({ theme }) => theme.colors.accent};
    }
    & .arrow {
      transition: border-color ${({ theme }) => theme.baseTransition};
    }
    &:hover .arrow {
      border-top-color: ${({ theme }) => theme.colors.accent};
      border-bottom-color: ${({ theme }) => theme.colors.accent};
    }
  }
  & > .js-class {
    position: absolute;
    top: 8px;
    left: 8px;
    pointer-events: none;
    transition: rotate ${({ theme }) => theme.baseTransition};
    & > .js-class.rotate {
      left: unset;
      right: 16px;
    }
  }
  & .form-control {
    all: initial;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 40px;
    padding-inline-start: 48px;
    padding-inline-end: 8px;
    font-family: 'Roboto Mono', sans-serif;
    font-style: normal;
    font-size: 20px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0;

    transition: border-color ${({ theme }) => theme.baseTransition};
    @media screen and (${({ theme }) => theme.devices.tablet}) {
      font-size: 24px;
    }
  }
  & .country-list {
    text-align: left;
  }
  & .flag-dropdown {
    border: unset;
    background: unset;
    border-radius: 0;
  }
  & .flag-dropdown.open {
    z-index: 4;
  }
  & .selected-flag:hover,
  .selected-flag:active,
  .selected-flag:focus,
  .react-tel-input .flag-dropdown.open,
  .react-tel-input .flag-dropdown.open .selected-flag,
  *.open {
    background-color: unset;
  }
`;

export const CheckBoxLabelStyled = styled.label`
  order: ${({ jsOrder }) => jsOrder};
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`;

export const InputStyled = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  font-size: 20px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  padding-inline-start: 40px;
  padding-inline-end: 8px;

  border: 1px solid ${({ theme }) => theme.colors.primary};

  transition: border-color ${({ theme }) => theme.baseTransition};
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.darkSectionBefore};
    border-color: ${({ theme }) => theme.colors.darkSectionBefore};
    &::placeholder {
      color: ${({ theme }) => theme.colors.darkSectionBefore};
    }
  }
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const CheckBoxInput = styled.input`
  &:checked {
    & + span::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CheckBox = styled.span`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const RightButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  fill: inherit;
`;
