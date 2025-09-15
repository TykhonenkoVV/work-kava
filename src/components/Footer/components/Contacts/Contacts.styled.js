import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 20px;
  }
`;

export const ContactsLink = styled.a`
  color: ${props => props.theme.colors.white};
  transition: color ${props => props.theme.baseTransition};
  font-style: normal;
  display: flex;
  flex-direction: column;

  @media screen and (${props => props.theme.devices.tablet}) {
    text-align: start;
    padding-left: 23px;
    justify-content: start;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.whiteButtonHover};
  }
`;
