import styled from '@emotion/styled';

export const DishItem = styled.li`
  position: relative;
  display: flex;
  ${props =>
    props.isEven
      ? `
        flex-direction: row-reverse;
        padding: 15px 35px 35px 0;
        `
      : `
        flex-direction: row;
        padding: 15px 0 35px 35px;
      `};

  @media screen and (${props => props.theme.devices.onlymobile}) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
    ${props =>
      props.isEven
        ? `
        margin-left: -24px;
        `
        : `
        margin-right: -24px;
      `};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    /* align-items: flex-start; */
    padding-top: 24px;
    padding-bottom: 54px;

    ${props =>
      props.isEven
        ? `
        padding-left: 0;
        padding-right: 54px;
        `
        : `
        padding-left: 54px;
        padding-right: 0;
      `};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 16px;
    align-items: center;
    ${props =>
      props.isEven
        ? `
        padding: 10px 24px 24px 0;
      `
        : `
        padding: 10px 0 24px 24px;
      `};
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    height: 120px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    ${props =>
      props.isEven
        ? `
      border-bottom: 4px solid ${
        props.styles !== 'dark'
          ? props.theme.colors.accent
          : props.theme.colors.lightBlue
      };
    border-right: 4px solid ${
      props.styles !== 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.lightBlue
    };
    border-radius: 0 0 120px 0;
      `
        : `
        border-bottom: 4px solid ${
          props.styles !== 'dark'
            ? props.theme.colors.accent
            : props.theme.colors.lightBlue
        };
    border-left: 4px solid ${
      props.styles !== 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.lightBlue
    };
    border-radius: 0px 0px 0px 120px;
      `};

    @media screen and (${props => props.theme.devices.tablet}) {
      height: 171px;
      ${props =>
        props.isEven
          ? `border-radius: 0px 0px 171px 0px;`
          : `border-radius: 0px 0px 0px 171px;`}
    }
    @media screen and (${props => props.theme.devices.desktop}) {
      height: 104px;
      ${props =>
        props.isEven
          ? `border-radius: 0px 0px 104px 0px;`
          : `border-radius: 0px 0px 0px 104px;`}
    }
  }
`;

export const Picture = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${props =>
    props.title === 'Desserts' && props.isEven
      ? '15px 15px 15px 23px;'
      : props.title === 'Desserts' && !props.isEven
      ? '15px 23px 15px 15px;'
      : '0'};
  border-radius: ${props =>
    props.isEven ? '0px 50% 50% 0px' : '50% 0px 0px 50%'};
  ${props =>
    props.styles !== 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 246px;
    height: 234px;
    border-radius: ${props =>
      props.isEven ? '0px 130px 130px 0px' : '130px 0px 0px 130px'};
    justify-content: ${props =>
      props.isEven
        ? props.title === 'Desserts'
          ? 'flex-start'
          : 'flex-end'
        : props.title === 'Desserts'
        ? 'flex-end'
        : 'flex-start'};
    padding: ${props =>
      props.title === 'Desserts' && props.isEven
        ? '10px 10px 10px 22px;'
        : props.title === 'Desserts' && !props.isEven
        ? '10px 22px 10px 10px;'
        : '0'};
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    width: 218px;
    height: 160px;
    border-radius: ${props =>
      props.isEven ? '0px 80px 80px 0px' : '80px 0px 0px 80px'};
    padding: ${props =>
      props.title === 'Desserts' && props.isEven
        ? '10px 10px 10px 0'
        : props.title === 'Desserts' && !props.isEven
        ? '10px 0 10px 10px'
        : !props.isEven
        ? '0 50px 0 0'
        : '0 0 0 50px'};
  }

  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    border-radius: 50%;
    @media screen and (${props => props.theme.devices.onlymobile}) {
      top: -15px;
      left: ${props => (props.isEven ? '-5px' : '-15px')};
    }

    width: 200px;
    height: 200px;

    @media screen and (${props => props.theme.devices.tablet}) {
      width: 282px;
      height: 282px;

      ${props =>
        props.isEven
          ? `
       top: -24px;
       left: none;
       right: -24px;
      `
          : `
       top: -24px;
       left: -24px;
      `};
    }

    ${props =>
      props.styles === 'dark'
        ? `background-color: ${props.theme.colors.lightBlue}`
        : `background-color: ${props.theme.colors.accent}`};
    @media screen and (${props => props.theme.devices.desktop}) {
      width: 180px;
      height: 180px;
      ${props =>
        props.isEven
          ? `
        top: -10px;
        left: none;
        right: -10px;
        `
          : `
        top: -10px;
        left: -10px;
      `};
    }
  }
`;

export const Img = styled.img`
  display: block;
  ${props =>
    props.title === 'Desserts'
      ? 'width: 140px; height: 140px; border-radius: 50%; object-fit: cover;'
      : `width: 178px; height: 100%;`};

  @media screen and (${props => props.theme.devices.tablet}) {
    ${props =>
      props.title === 'Desserts'
        ? 'width: 214px; height: 214px; border-radius: 50%; object-fit: cover;'
        : `width: 274px; height: 100%;`};
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    ${props =>
      props.title === 'Desserts'
        ? 'width: 208px; height: 140px;'
        : `width: 168px; height: 100%;`};
    ${props =>
      props.title === 'Desserts' && props.isEven
        ? 'border-top-left-radius: 0; border-top-right-radius: 70px; border-bottom-left-radius: 0; border-bottom-right-radius: 70px;'
        : 'border-top-left-radius: 70px; border-top-right-radius: 0; border-bottom-left-radius: 70px; border-bottom-right-radius: 0;'};
  }
`;

export const DishItemBox = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 10px;
  flex-grow: 1;

  ${props =>
    props.styles !== 'dark'
      ? `background-color: ${props.theme.colors.white}`
      : `background-color: ${props.theme.colors.accent}`};

  ${props =>
    props.isEven
      ? `
        padding-left: 24px;
        `
      : 'padding-right: 24px;'}

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 20px;
    ${props =>
      props.isEven
        ? `
        padding-left: 20px;
        `
        : 'padding-right: 20px;'}
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 0;
    background-color: transparent;
  }
`;

export const DishName = styled.h3`
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 400;
  line-height: 1;

  color: ${props => props.theme.colors.primary};

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 20px;
    font-size: 28px;
  }
  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 12px;
    line-height: 1;
    font-size: 24px;
    ${props =>
      props.styles !== 'dark'
        ? `color: ${props.theme.colors.white}`
        : `color: ${props.theme.colors.accent}`};
  }
`;

export const PriceWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 177px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${props =>
    props.isEven
      ? 'left: 0; text-align: left; padding-left: 24px; border-radius: 0px 35px 0px 0px;'
      : 'right: 0; text-align: right; padding-right: 24px; border-radius: 35px 0px 0px 0px;'}
  ${props =>
    props.styles === 'dark'
      ? `background-color: ${props.theme.colors.lightBlue}; color: ${props.theme.colors.accent};`
      : `background-color: ${props.theme.colors.accent}; color: ${props.theme.colors.primary};`};

  @media screen and (${props => props.theme.devices.tablet}) {
    width: 194px;
    padding-top: 25px;
    padding-bottom: 25px;
    ${props =>
      props.isEven
        ? 'padding-left: 20px; border-radius: 0px 50px 0px 0px;'
        : 'padding-right: 20px; border-radius: 50px 0px 0px 0px;'}
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    position: static;
    width: 157px;
    height: 140px;
    padding-top: 44px;
    padding-bottom: 44px;
    border-top: 10px solid
      ${props =>
        props.styles === 'dark'
          ? props.theme.colors.accent
          : props.theme.colors.white};
    border-bottom: 10px solid
      ${props =>
        props.styles === 'dark'
          ? props.theme.colors.accent
          : props.theme.colors.white};
    ${props =>
      props.isEven
        ? `border-right: 10px solid ${
            props.styles === 'dark'
              ? props.theme.colors.accent
              : props.theme.colors.white
          };`
        : `border-left: 10px solid ${
            props.styles === 'dark'
              ? props.theme.colors.accent
              : props.theme.colors.white
          }`};
    ${props =>
      props.isEven
        ? 'border-radius: 0 70px 70px 0;'
        : 'border-radius: 70px 0 0 70px;'};
    /* ${props =>
      props.styles === 'dark'
        ? props.theme.colors.accent
        : props.theme.colors.white} */
  }
`;

export const ButtonAddToCart = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 15px;
  border-radius: 50%;
  ${props => (props.isEven ? 'right: 15px;' : 'left: 15px;')};
  fill: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.accent
      : props.theme.colors.white};
  @media screen and (${props => props.theme.devices.tablet}) {
    top: -20px;
    ${props =>
      props.isEven ? 'right: unset; left: 20px;' : 'left: unset; right: 20px;'};
    fill: ${props => props.theme.colors.accent};
    background-color: ${props =>
      props.styles === 'dark'
        ? props.theme.colors.lightBlue
        : props.theme.colors.white};
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    top: ${props => (props.styles === 'dark' ? '30px' : '20px')};
    ${props =>
      props.isEven
        ? 'right: unset; left: 340px;'
        : 'left: unset; right: 340px;'};
  }
`;

export const Price = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 50px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 32px;
  }
`;
