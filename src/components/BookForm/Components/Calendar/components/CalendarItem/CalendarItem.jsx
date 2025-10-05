import {
  CalendarUnchoosableYear,
  StyledCalendarItem
} from './CalendarItem.styled';
import { checkIsToday } from '../../helpers/checkIsToday';
import { checkDateIsEqual } from '../../helpers/checkDateIsEqual';

export const CalendarItem = ({
  onClose,
  selectDate,
  onClick,
  state,
  calendarTheme
}) => {
  const {
    mode,
    calendarDays,
    selectedDay,
    monthesNames,
    selectedMonth,
    selectedYear,
    selectedYearsInterval
  } = state;

  const onDayClick = (day, date) => {
    onClick.setSelectedDay(day);
    selectDate(date);
    onClose(date);
  };

  const onMonthClick = (index, mode) => {
    onClick.setSelectedMonthByIndex(index);
    onClick.setMode(mode);
  };

  const onYearClick = (year, mode) => {
    onClick.setSelectedYear(year);
    onClick.setMode(mode);
  };

  return (
    <>
      {mode === 'days' &&
        calendarDays.map(day => (
          <StyledCalendarItem
            key={day.timestamp.toString()}
            calendarTheme={calendarTheme}
            onClick={() => onDayClick(day, day.date)}
            aria-hidden
            data-current={checkIsToday(day.date)}
            data-active={checkDateIsEqual(day.date, selectedDay.date)}
            data-disabled={day.monthIndex !== selectedMonth.monthIndex}
          >
            {day.dayNumber}
          </StyledCalendarItem>
        ))}
      {mode === 'monthes' &&
        monthesNames.map(month => (
          <StyledCalendarItem
            key={month.month}
            calendarTheme={calendarTheme}
            onClick={() => onMonthClick(month.monthIndex, 'days')}
            aria-hidden
            data-current={
              new Date().getMonth() === month.monthIndex &&
              new Date().getFullYear() === selectedYear
            }
            data-active={
              month.monthIndex === selectedMonth.monthIndex &&
              selectedMonth.year === selectedYear
            }
          >
            {month.monthShort}
          </StyledCalendarItem>
        ))}
      {mode === 'years' && (
        <>
          <CalendarUnchoosableYear calendarTheme={calendarTheme}>
            {selectedYearsInterval[0] - 1}
          </CalendarUnchoosableYear>
          {selectedYearsInterval.map(year => (
            <StyledCalendarItem
              key={year}
              calendarTheme={calendarTheme}
              onClick={() => onYearClick(year, 'monthes')}
              aria-hidden
              data-current={new Date().getFullYear() === year}
              data-active={year === selectedYear}
            >
              {year}
            </StyledCalendarItem>
          ))}
          <CalendarUnchoosableYear calendarTheme={calendarTheme}>
            {selectedYearsInterval[selectedYearsInterval.length - 1] + 1}
          </CalendarUnchoosableYear>
        </>
      )}
    </>
  );
};
