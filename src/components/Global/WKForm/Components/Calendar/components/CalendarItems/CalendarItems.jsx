import { StyledCalendarItems } from './CalendarItems.styled';

export const CalendarItems = ({ state, calendarTheme, children }) => {
  return (
    <StyledCalendarItems mode={state} calendarTheme={calendarTheme}>
      {children}
    </StyledCalendarItems>
  );
};
