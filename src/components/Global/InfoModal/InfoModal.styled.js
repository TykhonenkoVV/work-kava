import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const InfoModalTitle = styled.h1`
  font-size: 30px;
  margin-block-end: 16px;
  text-align: center;
`;

export const InfoModalCaption = styled.p`
  font-size: 24px;
  margin-block-end: 16px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;
