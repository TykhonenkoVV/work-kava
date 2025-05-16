import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  @media screen and (${props => props.theme.devices.onlymobile}) {
    flex-direction: column;
    align-items: center;

    font-size: 30px;
  }

  display: flex;
  column-gap: 40px;
  row-gap: 16px;

  font-size: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkItem = styled(NavLink)`
  position: relative;

  display: flex;
  align-items: center;
  height: 45px;

  color: ${props => props.theme.colors.white};

  transition: ${props => `color ${props.theme.baseTransition}`};

  :hover,
  :focus {
    color: ${props => props.theme.colors.whiteButtonHover};
  }

  &.active {
    @media screen and (${props => props.theme.devices.tablet}) {
      height: 56px;

      color: ${props => props.theme.colors.accent};

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;

        border-radius: 2px;
        border-bottom: 4px solid ${props => props.theme.colors.accent};
      }
    }
  }
`;
