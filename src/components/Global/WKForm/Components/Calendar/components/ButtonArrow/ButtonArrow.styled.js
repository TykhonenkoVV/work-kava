import styled from '@emotion/styled';

export const StyledButtonArrow = styled.div`
  /* position: relative; */
  width: ${props => 16 * props.calendarTheme.coef + 'px'};
  height: ${props => 16 * props.calendarTheme.coef + 'px'};
  cursor: pointer;
  fill: ${props => props.calendarTheme.theme.headerTextColor};
  transition: fill ${props => props.calendarTheme.transition};
  &:hover {
    fill: ${props => props.calendarTheme.theme.headerHoverColor};
  }
  & svg {
    &[data-direction='right'] {
      rotate: 180deg;
    }
  }
`;
