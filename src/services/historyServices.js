const MS_PER_DAY = 86400000;

export const getWeekNumber = date => {
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

export const formatDate = (date, format, locale) => {
  const d = createDate({ date, locale });

  return format
    .replace(/\bYYYY\b/, d.year.toString())
    .replace(/\bYYY\b/, d.yearShort)
    .replace(/\bWW\b/, d.week.toString().padStart(2, '0'))
    .replace(/\bW\b/, d.week.toString())
    .replace(/\bDDDD\b/, d.day)
    .replace(/\bDDD\b/, d.dayShort)
    .replace(/\bDD\b/, d.dayNumber.toString().padStart(2, '0'))
    .replace(/\bD\b/, d.dayNumber.toString())
    .replace(/\bMMMM\b/, d.month)
    .replace(/\bMMM\b/, d.monthShort)
    .replace(/\bMM\b/, d.monthNumber.toString().padStart(2, '0'))
    .replace(/\bM\b/, d.monthNumber.toString());
};
