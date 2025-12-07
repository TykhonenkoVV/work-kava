import { Hero } from 'components/Hero/Hero';
import { PageContent } from 'components/Global/PageContent/PageContent';
import { homeSections as sections } from 'utils/commonUtils';

const Home = () => {
  return (
    <>
      <Hero page="home" />
      {sections.map((section, index) => (
        <PageContent
          key={section.id}
          id={section.id}
          page="home"
          title={section.title}
          description={section.description}
          styles={index % 2 !== 0 ? 'dark' : 'light'}
          linkTo={section.linkTo}
        />
      ))}
    </>
  );
};

export default Home;
