export const Currency = ({ locale }) => {
  return (
    <>
      {locale === 'en-UK' && <span>&#36;</span>}
      {locale === 'de-DE' && <span>&#8364;</span>}
      {locale === 'uk-UA' && <span>&#8372;</span>}
    </>
  );
};
