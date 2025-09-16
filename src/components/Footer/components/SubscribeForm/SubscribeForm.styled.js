import styled from '@emotion/styled';

export const FormTitle = styled.p`
  margin-block-end: 26px;
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
  font-weight: 400;
  line-height: 1;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    margin-block-end: 36px;
    text-align: start;
    font-size: 23px;
    line-height: 2;
  }
`;

export const FormBox = styled.div`
  gap: 27px;
  display: flex;
  flex-direction: column;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    padding-left: 19px;
    gap: 28px;
    border-left: 5px solid ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  transition: background-color ${({ theme }) => theme.baseTransition};

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    max-width: 288px;
  }

  @media screen and (${({ theme }) => theme.devices.desktop}) {
    max-width: 402px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.colors.whiteButtonHover};
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;
