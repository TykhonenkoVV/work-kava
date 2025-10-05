import { useSelector } from 'react-redux';
import { Item, LinkItem, List } from './Navigation.styled';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const Navigation = ({ action }) => {
  const { locale } = useSelector(selectUser);

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
