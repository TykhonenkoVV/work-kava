import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: none;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    gap: 16px;
    margin-left: auto;
  }
`;
