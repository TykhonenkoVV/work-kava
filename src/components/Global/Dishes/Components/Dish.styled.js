import styled from '@emotion/styled';

export const DishItem = styled.li`
  @media screen and (${({ theme }) => theme.devices.onlymobile}) {
    &:not(:last-child) {
      margin-block-end: 25px;
    }
  }
  position: relative;
`;

export const Img = styled.img`
  display: block;
  width: 358px;
  height: 198px;
  object-fit: cover;
  background-color: ${({ color }) => color};

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: 470px;
    height: 260px;
  }

  @media screen and (${({ theme }) => theme.devices.desktop}) {
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  background-color: ${({ theme }) => theme.colors.accent};

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    height: 60px;
    padding-inline-end: 80px;
  }
`;

export const DishName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    font-size: 24px;
  }

  @media screen and (${({ theme }) => theme.devices.desktop}) {
  }
`;

export const ButtonAddToCart = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 16px;
  bottom: 62px;
  border-radius: 50%;
  fill: ${({ theme }) => theme.colors.primary};
  background-color: ${({ styles, theme }) =>
    styles === 'dark' && theme.colors.accent};
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    right: 20px;
    bottom: 10px;
  }
`;
