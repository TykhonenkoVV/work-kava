import { Container } from 'components/App.styled';
import { SectionHero, MainText, DescrText, TextContainer } from './Hero.styled';
import { SocialLinksList } from 'components/SocialLinksList/SocialLinksList';

export const Hero = ({ page }) => {
  return (
    <SectionHero page={page}>
      <Container>
        <TextContainer page={page}>
          <MainText page={page}>
            {page === 'home'
              ? `Work & comfort? It's easy!`
              : page === 'cafe'
              ? 'A mountain of work? A cup of coffee!'
              : page === 'fastfood'
              ? 'Did you work? Have lunch!'
              : 'Work for an hour or for the whole day?'}
          </MainText>
          <DescrText page={page}>
            Creative coffee shop Work Kava is a cozy location for individual
            work, meetings, master classes and much more.
          </DescrText>
          <SocialLinksList />
        </TextContainer>
      </Container>
    </SectionHero>
  );
};
