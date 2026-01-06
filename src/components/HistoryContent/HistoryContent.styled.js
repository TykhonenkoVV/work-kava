import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HistoryLinkWrapper = styled.div`
  display: flex;
`;

export const HistoryTitle = styled.h1`
  display: inline-block;
  padding-inline-start: 30px;
  padding-block-start: 10px;
  padding-inline-end: 30px;
  margin-block-end: 20px;
  color: ${({ theme }) => theme.colors.darkBeigeDecor};
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  color: currentColor;
  border-inline-start: 1px solid ${({ theme }) => theme.colors.primary};
  border-block-start: 1px solid ${({ theme }) => theme.colors.primary};
  border-inline-end: 1px solid ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const CartLink = styled(Link)`
  display: inline-block;
  padding-inline-start: 30px;
  padding-block-start: 10px;
  padding-inline-end: 30px;
  margin-block-end: 20px;
  color: ${({ theme }) => theme.colors.darkBeigeDecor};
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  text-align: center;

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const Img = styled.img`
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-block-end: 50px;
`;

export const EmptyTitle = styled.p`
  font-size: 25px;
  text-align: center;
`;
