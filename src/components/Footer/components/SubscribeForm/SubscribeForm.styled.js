import styled from '@emotion/styled';

export const FormTitle = styled.p`
  margin-block-end: 26px;
  color: ${props => props.theme.colors.white};

  text-align: center;
  font-weight: 400;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    text-align: start;
    line-height: 1.875;
  }
`;

export const FormBox = styled.div`
  gap: 27px;
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-left: 26px;
    gap: 40px;
    border-left: 5px solid ${props => props.theme.colors.white};
  }
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  max-width: 366px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  background-color: transparent;
  transition: background-color ${props => props.theme.baseTransition};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 288px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 402px;
  }

  &::placeholder {
    color: ${props => props.theme.colors.darkGray};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover,
  :focus,
  :active {
    background-color: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;
