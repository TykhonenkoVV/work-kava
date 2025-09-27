export const userLocal = () => {
  const lang = navigator.language;
  switch (lang) {
    case 'uk':
      return 'uk-UA';

    case 'ru':
      return 'uk-UA';

    case 'en':
      return 'en-UK';

    case 'de':
      return 'de-DE';

    default:
      return 'en-UK';
  }
};
