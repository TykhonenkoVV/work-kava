import { Container } from 'styles/globalComponents.styled';
import { SectionHero, MainText, DescrText, TextContainer } from './Hero.styled';
import { SocialLinksList } from 'components/Global/SocialLinksList/SocialLinksList';
import { lang } from 'lang/lang';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const Hero = ({ page }) => {
  const { locale } = useSelector(selectUser);
  return (
    <SectionHero page={page}>
      <Container>
        <TextContainer page={page}>
          <MainText page={page}>
            {page === 'home'
              ? lang[locale].hero_home_title
              : page === 'cafe'
              ? lang[locale].hero_cafe_title
              : page === 'fastfood'
              ? lang[locale].hero_fastfood_title
              : lang[locale].hero_coworking_title}
          </MainText>
          <DescrText page={page}>
            {page === 'home'
              ? lang[locale].hero_home_slogan
              : page === 'cafe'
              ? lang[locale].hero_cafe_slogan
              : page === 'fastfood'
              ? lang[locale].hero_fastfood_slogan
              : lang[locale].hero_coworking_slogan}
          </DescrText>
          <SocialLinksList />
        </TextContainer>
      </Container>
    </SectionHero>
  );
};
