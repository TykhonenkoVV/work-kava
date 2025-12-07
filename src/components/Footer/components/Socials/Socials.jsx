import { SocialLinksList } from 'components/Global/SocialLinksList/SocialLinksList';
import { Icons, IconsBox } from './Socials.styled';
import { Title } from './Socials.styled';
import { lang } from 'lang/lang';
import { useAuth } from 'hooks/useAuth';

export const Socials = () => {
  const { locale } = useAuth();
  return (
    <Icons>
      <Title>{lang[locale].socials}</Title>
      <IconsBox>
        <SocialLinksList />
      </IconsBox>
    </Icons>
  );
};
