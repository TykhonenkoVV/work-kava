import { SocialLinksList } from 'components/Global/SocialLinksList/SocialLinksList';
import { Icons, IconsBox } from './Socials.styled';
import { Title } from './Socials.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const Socials = () => {
  const { locale } = useSelector(selectUser);
  return (
    <Icons>
      <Title>{lang[locale].socials}</Title>
      <IconsBox>
        <SocialLinksList />
      </IconsBox>
    </Icons>
  );
};
