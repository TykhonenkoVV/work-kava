import styled from '@emotion/styled';

export const WKErrorText = styled.p`
  margin-block-start: 16px;
  font-size: 16px;
  color: ${props => props.theme.colors.validationError};
`;

export const WKFromStyled = styled.form``;

export const WKTitleStyled = styled.p`
  margin-block-end: 20px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 32px;
    line-height: 1.25;
  }
`;

export const DataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 4;
  pointer-events: auto;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.baseTransition};
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;

export const LabelStyled = styled.label`
  position: relative;
  order: ${({ jsOrder }) => jsOrder};
  fill: ${props => props.theme.colors.darkGray};
  transition: fill ${props => props.theme.baseTransition};
  &:has(input:hover, input:focus, input:active) {
    fill: ${props => props.theme.colors.accent};
  }
  & > svg {
    position: absolute;
    top: 10px;
    left: 16px;
    pointer-events: none;
    transition: rotate ${props => props.theme.baseTransition};
    &.rotate {
      left: unset;
      right: 16px;
    }
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
  height: 48px;
  font-size: 20px;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  outline: none;
  padding-inline-start: 60px;
  padding-inline-end: 16px;

  border: 1px solid ${props => props.theme.colors.primary};

  transition: border-color ${props => props.theme.baseTransition};
  &:hover,
  :focus,
  :active {
    border-color: ${props => props.theme.colors.accent};
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 24px;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    border-color: unset;
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
  top: 10px;
  right: 16px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  fill: ${props => props.theme.colors.darkGray};
`;
