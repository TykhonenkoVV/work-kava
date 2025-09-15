import { Logo } from './components/Logo/Logo';
import { Container } from 'components/App.styled';
import { Section, FooterBox } from './Footer.styled';
import { Contacts } from './components/Contacts/Contacts';
import { Socials } from './components/Socials/Socials';
import { SubscribeForm } from './components/SubscribeForm/SubscribeForm';

export const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterBox>
          <Logo />
          <Contacts />
        </FooterBox>
        <Socials />
        <SubscribeForm />
      </Container>
    </Section>
  );
};
