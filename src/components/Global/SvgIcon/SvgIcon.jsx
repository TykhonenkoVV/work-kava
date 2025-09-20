import sprite from '../../../images/sprite.svg';

export const SvgIcon = ({ w, h, icon, className }) => {
  return (
    <svg
      width={w}
      height={h}
      aria-hidden="true"
      role="presentation"
      className={className}
    >
      <use href={`${sprite}#icon-${icon}`} />
    </svg>
  );
};
