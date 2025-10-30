import styled from '@emotion/styled';

export const FromStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileInputWrapper = styled.label`
  position: relative;
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

export const ProfileInput = styled.input`
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

export const ErrorStyled = styled.p`
  color: ${props => props.theme.colors.errorColor};
  font-family: Poppins;
  font-size: 12px;
  margin-block-start: 8px;
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const CheckBoxInputWrapper = styled.label`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
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

export const BtnShowPassword = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  fill: ${props => props.theme.colors.eyeShowPassColor};
`;
