import styled from '@emotion/styled';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterButton = styled.button`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    width: 20px;
    height: 20px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-start-start-radius: 50%;
  border-end-start-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 30px;
    height: 30px;
  }
  &#plus {
    border-start-start-radius: unset;
    border-end-start-radius: unset;
    border-end-end-radius: 50%;
    border-start-end-radius: 50%;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &#plus::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 2px;
    rotate: 90deg;
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const CounterContent = styled.p`
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 14px;
    width: 26px;
    height: 20px;
  }
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 22px;
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.accent};
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 20px;
    width: 40px;
    height: 30px;
  }
`;
