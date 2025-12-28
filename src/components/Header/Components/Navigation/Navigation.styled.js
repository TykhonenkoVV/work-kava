import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  @media screen and (${({ theme }) => theme.devices.onlymobile}) {
    font-size: 32px;
    line-height: 1.25;
    row-gap: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0;
  line-height: 1;
  font-size: 24px;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    height: 100%;
    flex-direction: row;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    height: 100%;
  }
`;

export const LinkItem = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  color: inherit;
  transition: ${({ theme }) => `color ${{ theme }.theme.baseTransition}`};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    height: 100%;
    padding-inline-start: 24px;
    padding-inline-end: 24px;
    &.active {
      color: ${({ theme }) => theme.colors.accent};

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin-inline-start: auto;
        margin-inline-end: auto;
        bottom: 12px;

        width: calc(100% - 48px);

        border-radius: 2px;
        border-block-end: 4px solid ${({ theme }) => theme.colors.accent};
      }
    }
  }
`;
