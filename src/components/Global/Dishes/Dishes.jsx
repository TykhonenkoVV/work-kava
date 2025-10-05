import { DishesSection } from 'styles/globalComponents.styled';
import { Dish } from './Components/Dish';
import { Title, DishesList, DishesContainer } from './Dishes.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const Dishes = ({ title, dishes, styles }) => {
  const { locale } = useSelector(selectUser);
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
              title={title}
              styles={styles}
            />
          ))}
        </DishesList>
      </DishesContainer>
    </DishesSection>
  );
};
