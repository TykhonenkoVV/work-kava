import sprite from '../../../images/sprite.svg';
import { StyledSvg } from './SvgIcon.styled';

export const SvgIcon = ({ w, h, icon, addedStyle, className }) => {
  return (
    <StyledSvg
      width={w}
      height={h}
      aria-hidden="true"
      role="presentation"
      addedStyle={addedStyle}
      className={className}
    >
      <use href={`${sprite}#icon-${icon}`} />
    </StyledSvg>
  );
};
