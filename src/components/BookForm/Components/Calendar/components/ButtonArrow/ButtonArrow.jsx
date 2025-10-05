import { StyledButtonArrow } from './ButtonArrow.styled';
import sprite from '../../images/sprite.svg';

export const ButtonArrow = ({ onClick, calendarTheme, direction }) => {
  return (
    <StyledButtonArrow
      calendarTheme={calendarTheme}
      onClick={() => onClick(direction)}
      aria-hidden
      aria-label="Previews"
    >
      <svg
        width={16 * calendarTheme.coef}
        height={16 * calendarTheme.coef}
        data-direction={direction}
      >
        <use xlinkHref={`${sprite}#icon-arrow`} />
      </svg>
    </StyledButtonArrow>
  );
};
