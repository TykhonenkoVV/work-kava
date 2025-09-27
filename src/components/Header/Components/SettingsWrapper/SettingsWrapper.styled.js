import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: none;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    display: flex;
    gap: 16px;
    margin-left: auto;
  }
`;
