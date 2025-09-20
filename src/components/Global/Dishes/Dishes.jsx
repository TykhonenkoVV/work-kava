import { DishesSection } from 'styles/globalComponents.styled';
import { Dish } from './Components/Dish';
import { Title, DishesList, DishesContainer } from './Dishes.styled';

export const Dishes = ({ title, dishes, styles }) => {
  const titleName = title.toLowerCase().replace(/ /g, '-');

  return (
    <DishesSection name={titleName}>
      <DishesContainer>
        <Title styles={styles} name={titleName}>
          {title}
        </Title>
        <DishesList name={titleName}>
          {dishes?.map((dish, index) => (
            <Dish
              key={dish._id}
              data={dish}
              index={index}
              title={title}
              styles={styles}
            />
          ))}
        </DishesList>
      </DishesContainer>
    </DishesSection>
  );
};
