import { Dishes } from 'components/Global/Dishes/Dishes';
import { Hero } from 'components/Hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCafeDishes } from 'store/cafe/operation';
import {
  selectCoffeeClassics,
  selectCoffeeWithMilk,
  selectDessers
} from 'store/cafe/selectors';

const Cafe = () => {
  const dispatch = useDispatch();

  const coffeeClassic = useSelector(selectCoffeeClassics);
  const coffeeWithMilk = useSelector(selectCoffeeWithMilk);
  const desserts = useSelector(selectDessers);

  useEffect(() => {
    dispatch(getCafeDishes());
  }, [dispatch]);

  return (
    <>
      <Hero page="cafe" />
      {coffeeClassic.length > 0 && (
        <Dishes
          title="Coffee classic"
          dishes={coffeeClassic}
          styles="light"
          firstDishes={true}
        />
      )}
      {coffeeWithMilk.length > 0 && (
        <Dishes
          title="Coffee with milk"
          dishes={coffeeWithMilk}
          styles="light"
        />
      )}
      {desserts.length > 0 && (
        <Dishes title="Desserts" dishes={desserts} styles="dark" />
      )}
    </>
  );
};

export default Cafe;
