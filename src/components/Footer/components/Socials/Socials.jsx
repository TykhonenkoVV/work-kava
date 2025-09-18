import { SocialLinksList } from 'components/Global/SocialLinksList/SocialLinksList';
import { Icons, IconsBox } from './Socials.styled';
import { Title } from './Socials.styled';

export const Socials = () => {
  return (
    <Icons>
      <Title>We are on socials</Title>
      <IconsBox>
        <SocialLinksList />
      </IconsBox>
    </Icons>
  );
};
