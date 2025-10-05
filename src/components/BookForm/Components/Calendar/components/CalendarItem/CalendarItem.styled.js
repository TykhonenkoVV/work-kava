import styled from '@emotion/styled';

export const StyledCalendarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${props => props.calendarTheme.theme.daysTextColor};
  cursor: pointer;
  transition: color ${props => props.calendarTheme.transition},
    background-color ${props => props.calendarTheme.transition};
  ${props =>
    props.calendarTheme.borderRadius &&
    `border-radius: ${
      props.calendarTheme.borderRadius * props.calendarTheme.coef
    }px`};
  &[data-disabled='true'] {
    font-weight: 300;
    color: ${props => props.calendarTheme.theme.additionalTextColor};
  }
  &[data-current='true'] {
    color: ${props => props.calendarTheme.theme.currentTextColor};
    background-color: ${props => props.calendarTheme.theme.currentBgrColor};
  }
  &[data-active='true'] {
    color: ${props => props.calendarTheme.theme.activTextColor};
    background-color: ${props => props.calendarTheme.theme.activBgrColor};
  }
  &:hover {
    color: ${props => props.calendarTheme.theme.hoverTextColor};
    background-color: ${props => props.calendarTheme.theme.hoverBgrColor};
  }
`;

export const CalendarUnchoosableYear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: ${props => props.calendarTheme.theme.additionalTextColor};
`;
