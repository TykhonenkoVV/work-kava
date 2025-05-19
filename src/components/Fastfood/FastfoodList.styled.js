import styled from '@emotion/styled';

export const ItemsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 50px;

  @media screen and (${props => props.theme.devices.tablet}) {
    flex-direction: row;
    justify-content: left;
    column-gap: 23px;
    padding-bottom: 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    column-gap: 30px;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 31px;
  background-color: ${props => props.theme.colors.accent};
  @media screen and (${props => props.theme.devices.onlymobile}) {
    border-top-left-radius: 80px;
    border-bottom-right-radius: 80px;
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    flex-basis: calc((100% - 70px) / 3);
    padding: 20px;
    &:nth-child(3n + 1) {
      border-top-left-radius: 60px;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -24px;
        z-index: 1;
        width: 976px;
        height: 50%;
        border-bottom: 4px solid ${props => props.theme.colors.accent};
        border-right: 4px solid ${props => props.theme.colors.accent};
        border-bottom-right-radius: 84px;
        @media screen and (${props => props.theme.devices.desktop}) {
          width: 1164px;
        }
      }
    }
    &[id='2']::after {
      width: 651px;
      @media screen and (${props => props.theme.devices.desktop}) {
        width: 774px;
      }
    }
    &[id='1']::after {
      width: 326px;
      @media screen and (${props => props.theme.devices.desktop}) {
        width: 384px;
      }
    }
    &:nth-child(3n),
    &:last-child {
      border-bottom-right-radius: 60px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    flex-basis: calc((100% - 84px) / 3);
  }
`;

export const CartBtn = styled.button`
  position: absolute;
  left: 225px;
  bottom: 47px;
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  fill: ${props => props.theme.colors.primary};
  z-index: 3;
  @media screen and (${props => props.theme.devices.tablet}) {
    left: 20px;
    top: 74px;
    bottom: unset;
    background-color: ${props => props.theme.colors.lightBlue};
    fill: ${props => props.theme.colors.white};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    top: 90px;
  }
`;
