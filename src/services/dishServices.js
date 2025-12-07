export const changePrice = (position, title, data, shortLocale) => {
  if (position === 1)
    if (title === 'burgers' || title === 'rolls' || title === 'hot_dogs') {
      return Number(data[`price_standart_${shortLocale}`]).toFixed(2);
    } else return Number(data[`price_${shortLocale}`]).toFixed(2);
  if (position === 2)
    if (title === 'burgers' || title === 'hot_dogs') {
      return Number(data[`price_double_${shortLocale}`]).toFixed(2);
    } else if (title === 'rolls')
      return Number(data[`price_xl_${shortLocale}`]).toFixed(2);
};
