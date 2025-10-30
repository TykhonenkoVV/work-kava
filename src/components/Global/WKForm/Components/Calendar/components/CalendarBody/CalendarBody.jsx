import { StyledCalendarBody } from './CalendarBody.styled';

export const CalendarBody = ({ calendarTheme, children }) => {
  return (
    <StyledCalendarBody calendarTheme={calendarTheme}>
      {children}
    </StyledCalendarBody>
  );
};
