import styled from '@emotion/styled';

export const Section = styled.section`
  padding-block-start: 40px;
  padding-block-end: 40px;

  ${props =>
    props.page === 'cafe' &&
    (props.firstDishes
      ? 'padding-top: 160px; padding-bottom: 80px;'
      : 'padding-top: 80px; padding-bottom: 80px;')};

  @media screen and (${({ theme }) => theme.devices.desktop}) {
    padding-block-start: 100px;
    padding-block-end: 100px;

    ${props =>
      props.page === 'cafe' &&
      (props.firstDishes
        ? 'padding-top: 200px; padding-bottom: 120px;'
        : 'padding-top: 120px; padding-bottom: 120px;')};
  }
`;

export const DarkSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  padding: 0 28px;
  margin: 0 auto;
  text-align: center;

  @media screen and (${({ theme }) => theme.devices.mobile}) {
    width: ${({ theme }) => theme.sizes.mobile}px;
  }

  @media screen and (${({ theme }) => theme.devices.tablet}) {
    width: ${({ theme }) => theme.sizes.tablet}px;
  }

  @media screen and (${({ theme }) => theme.devices.desktop}) {
    width: ${({ theme }) => theme.sizes.desktop}px;
    padding: 0 138px;
  }
`;

export const HomeSection = styled(Section)`
  position: relative;
  background: ${({ styles, theme }) =>
    styles === 'dark' ? theme.colors.primary : theme.colors.white};

  color: ${({ styles, theme }) =>
    styles === 'dark' ? theme.colors.white : theme.colors.primary};
  overflow: hidden;
  @media screen and (${({ theme }) => theme.devices.tablet}) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      ${({ styles }) => (styles === 'dark' ? 'right: 50%;' : 'left: 50%;')}
      width: 100%;
      height: 100%;
      background-color: ${({ styles, theme }) =>
        styles === 'dark'
          ? theme.colors.darkSectionBefore
          : theme.colors.lightSectionBefore};
      z-index: 0;
    }
  }
`;

export const CoworkingSection = styled(Section)`
  background: ${props =>
    props.Coworkingstyles === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.white};

  color: ${props =>
    props.styles === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.primary};
`;

export const DishesSection = styled(Section)`
  background: ${({ name, theme }) => {
    if (name === 'coffee-classic' || name === 'burgers') {
      return theme.colors.firstSectionBackground;
    } else if (name === 'coffee-with-milk' || name === 'rolls') {
      return theme.colors.secondSectionBackground;
    } else if (name === 'desserts' || name === 'hot-dogs') {
      return theme.colors.thirdSectionBackground;
    } else {
      return '#fff';
    }
  }};
  @media screen and (${({ theme }) => theme.devices.desktop}) {
    padding-block-start: 30px;
    padding-block-end: 30px;
  }
`;

export const CartSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.white};
`;
