import { useMemo, useState } from 'react';
import { createMonthDays, getMonthNumberOfDays } from 'utils/pickerUtils';

const DAYS_IN_WEEK = 7;
const month = new Date().getMonth();
const prevMonth = month === 0 ? 11 : month - 1;
const nextMonth = month === 11 ? 0 : month + 1;
const year = new Date().getFullYear();
const prevYear = year - 1;
const nextYear = year + 1;

export const usePicker = ({ locale = 'default', firstWeekDayNumber = 2 }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const days = createMonthDays({
    locale,
    month,
    year,
    firstWeekDayNumber,
    daysCount: getMonthNumberOfDays(month, year)
  });

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(month, year);

    const prevMonthDays = createMonthDays({
      locale,
      month: prevMonth,
      year: prevMonth === 11 ? prevYear : year,
      daysCount: getMonthNumberOfDays(
        prevMonth,
        prevMonth === 11 ? prevYear : year
      )
    });

    const nextMonthDays = createMonthDays({
      locale,
      month: nextMonth,
      year: nextMonth === 0 ? nextYear : year,
      daysCount: getMonthNumberOfDays(
        nextMonth,
        nextMonth === 0 ? nextYear : year
      )
    });

    const firstDay = days[0];
    const lastDay = days[monthNumberOfDays - 1];

    const shiftIndex = firstWeekDayNumber - 1;
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? DAYS_IN_WEEK - (firstWeekDayNumber - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays =
      DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
        ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
        : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i += 1
    ) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (let i = totalCalendarDays - numberOfNextDays; i < 42; i += 1) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }

    return result;
  }, [locale, days, firstWeekDayNumber]);

  console.log('Days: ', calendarDays);

  return {
    state: { calendarDays },
    functions: { setSelectedDate }
  };
};
