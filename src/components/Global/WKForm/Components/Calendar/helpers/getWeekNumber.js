import { MS_PER_DAY } from '../utils/constants';

export const getWeekNumber = date => {
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (date.getTime() - firstDayOfTheYear.getTime()) / MS_PER_DAY;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7);
};
