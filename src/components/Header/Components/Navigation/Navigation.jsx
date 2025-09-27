import { useSelector } from 'react-redux';
import { Item, LinkItem, List } from './Navigation.styled';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const Navigation = ({ action }) => {
  const { local } = useSelector(selectUser);

  return (
    <nav style={{ height: '100%' }}>
      <List>
        <Item key="1">
          <LinkItem to="/" onClick={action}>
            {lang[local].home}
          </LinkItem>
        </Item>
        <Item key="2">
          <LinkItem to="/cafe" onClick={action}>
            {lang[local].cafe}
          </LinkItem>
        </Item>
        <Item key="3">
          <LinkItem to="/fastfood" onClick={action}>
            {lang[local].fastfood}
          </LinkItem>
        </Item>
        <Item key="4">
          <LinkItem to="/coworking" onClick={action}>
            {lang[local].coworking}
          </LinkItem>
        </Item>
      </List>
    </nav>
  );
};
