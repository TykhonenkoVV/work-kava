import { SvgIcon } from 'components/Global/SvgIcon/SvgIcon';
import { StyledLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLink to="/" aria-label="Home">
      <SvgIcon icon="logo" w={201} h={46} />
    </StyledLink>
  );
};
