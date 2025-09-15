const MS_PER_DAY = 86400000;

export const getMonthNumberOfDays = (monthIndex, yearNumber) =>
  new Date(yearNumber, monthIndex + 1, 0).getDate();

const getWeekNumber = date => {
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (date.getTime() - firstDayOfTheYear.getTime()) / MS_PER_DAY;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7);
};

const createDate = params => {
  const locale = params?.locale ?? 'default';

  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString(locale, { weekday: 'long' });
  const dayNumberInWeek = d.getDay() + 1;
  const dayShort = d.toLocaleDateString(locale, { weekday: 'short' });
  const year = d.getFullYear();
  const yearShort = d.toLocaleDateString(locale, { year: '2-digit' });
  const month = d.toLocaleDateString(locale, { month: 'long' });
  const monthShort = d.toLocaleDateString(locale, { month: 'short' });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week
  };
};

const getMonthDay = params =>
  createDate({
    date: new Date(params.year, params.month, params.dayNumber),
    locale: params.locale
  });

export const createMonthDays = params => {
  const days = [];

  for (let i = 0; i <= params.daysCount - 1; i += 1) {
    days[i] = getMonthDay({
      locale: params.locale,
      year: params.year,
      month: params.month,
      dayNumber: i + 1
    });
  }

  return days;
};
