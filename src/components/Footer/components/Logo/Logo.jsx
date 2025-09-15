import { Link } from 'react-router-dom';
import { Svg } from '../../../SvgIcon/SvgIcon';
import { StyledLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLink to="/" aria-label="Home">
      <Svg icon="logo" w={201} h={46} />
    </StyledLink>
  );
};
