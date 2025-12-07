import { Item, LinkItem, List } from './Navigation.styled';
import { lang } from 'lang/lang';
import { useAuth } from 'hooks/useAuth';

export const Navigation = ({ action }) => {
  const { locale } = useAuth();

  return (
    <nav style={{ height: '100%' }}>
      <List>
        <Item key="1">
          <LinkItem to="/" onClick={action}>
            {lang[locale].home}
          </LinkItem>
        </Item>
        <Item key="2">
          <LinkItem to="/cafe" onClick={action}>
            {lang[locale].cafe}
          </LinkItem>
        </Item>
        <Item key="3">
          <LinkItem to="/fastfood" onClick={action}>
            {lang[locale].fastfood}
          </LinkItem>
        </Item>
        <Item key="4">
          <LinkItem to="/coworking" onClick={action}>
            {lang[locale].coworking}
          </LinkItem>
        </Item>
      </List>
    </nav>
  );
};
