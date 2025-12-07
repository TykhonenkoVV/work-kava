import { DishesSection } from 'styles/globalComponents.styled';
import { Dish } from './Components/Dish';
import { Title, DishesList, DishesContainer } from './Dishes.styled';
import { lang } from 'lang/lang';
import { useAuth } from 'hooks/useAuth';

export const Dishes = ({ title, dishes, page, styles }) => {
  const { locale } = useAuth();
  const titleName = title.toLowerCase().replace(/_/g, '-');

  return (
    <DishesSection name={titleName}>
      <DishesContainer>
        <Title styles={styles} name={titleName}>
          {lang[locale][title]}
        </Title>
        <DishesList name={titleName}>
          {dishes?.map((dish, index) => (
            <Dish
              key={dish._id}
              data={dish}
              index={index}
              title={titleName}
              styles={styles}
              page={page}
            />
          ))}
        </DishesList>
      </DishesContainer>
    </DishesSection>
  );
};
