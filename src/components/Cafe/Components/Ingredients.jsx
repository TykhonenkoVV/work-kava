import React from 'react';
import {
  IngredientsList,
  IngredientItem,
  Dots,
  Amount,
  Item
} from './Ingredients.styled';

export const Ingredients = ({ ingredients, isEven, styles }) => {
  const keys = Object.keys(ingredients);
  const amount = Object.values(ingredients);

  console.log(Object.keys(ingredients)[0]);

  return (
    <IngredientsList isEven={isEven} styles={styles}>
      {keys.map((item, index) => (
        <IngredientItem key={item}>
          <Item>{item}</Item>
          <Dots> .....</Dots>
          <Amount>{amount[index]}</Amount>
        </IngredientItem>
      ))}
    </IngredientsList>
  );
};
