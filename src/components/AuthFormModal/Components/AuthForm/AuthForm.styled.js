import styled from '@emotion/styled';
import { BlueButton } from 'styles/buttonStyles';

export const ErrorText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.validationError};
`;

export const StyledAuthForm = styled.form`
  width: 100%;
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

export const AuthTitle = styled.p`
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

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-block-end: 20px;
  &[data-id='sign-in'] {
    margin-block-end: 52px;
  }
`;

export const AuthInputWrapper = styled.label`
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
  &[data-active='true'] svg.rotate {
    rotate: 180deg;
  }
  &[data-picker='true'] {
    position: relative;
  }
`;

export const AuthInput = styled.input`
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
`;

export const AuthFormCaption = styled.p`
  margin-block-start: 20px;
  margin-block-end: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
`;

export const AuthChangeButton = styled(BlueButton)`
  height: 52px;
  font-size: 20px;
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
