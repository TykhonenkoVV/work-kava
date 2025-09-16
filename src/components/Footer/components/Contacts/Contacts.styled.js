import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    gap: 20px;
    border-inline-start: 5px solid ${({ theme }) => theme.colors.white};
    padding-inline-start: 19px;
  }
  @media screen and (${({ theme }) => theme.devices.desktop}) {
    gap: 20px;
  }
`;

export const ContactsLink = styled.a`
  transition: color ${({ theme }) => theme.baseTransition};
  font-style: normal;
  display: flex;
  flex-direction: column;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    justify-content: start;
    text-align: start;
    font-size: 20px;
    line-height: 1.8;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;
