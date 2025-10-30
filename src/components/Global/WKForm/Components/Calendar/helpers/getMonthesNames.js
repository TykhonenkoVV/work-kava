import { createDate } from './createDate';

export const getMonthesNames = (locale = 'defalut') => {
  let monthesNames = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date(new Date().getFullYear(), 0 + i, 1);
    const { month, monthIndex, monthShort } = createDate({
      locale,
      date
    });
    monthesNames[monthIndex] = { month, monthIndex, monthShort };
  }
  return monthesNames;
};
