import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  height: 46px;
  margin-block-end: 50px;
  @media screen and (${props => props.theme.devices.tablet}) {
    margin-block-end: 36px;
  }
`;
