import { StyledHeader } from './CalendarHeader.styled';

export const CalendarHeader = ({ calendarTheme, children }) => {
  return <StyledHeader calendarTheme={calendarTheme}>{children}</StyledHeader>;
};
