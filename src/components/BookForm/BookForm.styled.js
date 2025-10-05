import styled from '@emotion/styled';

export const ErrorText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.validationError};
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    right: 14px;
    top: 14px;
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const FormTitle = styled.p`
  margin-block-end: 24px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 28px;
    margin-block-end: 32px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-block-end: 20px;
`;

export const InputWrapper = styled.label`
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

export const Input = styled.input`
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

export const PriceText = styled.p`
  margin-block-end: 20px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3334;
  text-align: center;
`;

export const UserIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
