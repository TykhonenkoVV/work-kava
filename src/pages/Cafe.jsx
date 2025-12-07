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
          title="coffee_classic"
          dishes={coffeeClassic}
          styles="light"
          page="cafe"
        />
      )}
      {coffeeWithMilk.length > 0 && (
        <Dishes
          title="coffee_with_milk"
          dishes={coffeeWithMilk}
          styles="light"
          page="cafe"
        />
      )}
      {desserts.length > 0 && (
        <Dishes title="desserts" dishes={desserts} styles="dark" page="cafe" />
      )}
    </>
  );
};

export default Cafe;
