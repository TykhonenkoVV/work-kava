import { SvgIcon } from '../SvgIcon/SvgIcon';
import { LinkItem, Links } from './SocialLinksList.styled';

const links = [
  {
    icon: 'twitter',
    text: 'Twitter',
    link: 'https://twitter.com/?lang=uk'
  },
  {
    icon: 'telegram',
    text: 'Telegram',
    link: 'https://web.telegram.org/a/'
  },
  {
    icon: 'linkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/'
  },
  {
    icon: 'facebook',
    text: 'Facebook',
    link: 'https://uk-ua.facebook.com/'
  },
  {
    icon: 'instagram',
    text: 'Instagram',
    link: 'https://www.instagram.com/'
  }
];

export const SocialLinksList = () => {
  return (
    <Links>
      {links.map(({ link, text, icon }, index) => (
        <LinkItem key={index}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text}
          >
            <SvgIcon w={40} h={40} icon={icon} />
          </a>
        </LinkItem>
      ))}
    </Links>
  );
};
