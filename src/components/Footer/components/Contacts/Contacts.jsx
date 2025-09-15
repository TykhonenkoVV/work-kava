import { ContactsList, ContactsLink } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsList>
      <li>
        <ContactsLink
          href="https://maps.app.goo.gl/JiVWbY7LrwSrAAdD7"
          target="_blank"
          rel="noopener nofollow"
        >
          Kryvyi Rih, st. Nova, 1
        </ContactsLink>
      </li>
      <li>
        <ContactsLink href="mailto:info@workkava.com" rel="noopener nofollow">
          info@workkava.com
        </ContactsLink>
      </li>
      <li>
        <ContactsLink href="tel:+380970000000" rel="noopener nofollow">
          +38 (097) 000 00 00
        </ContactsLink>
      </li>
    </ContactsList>
  );
};
