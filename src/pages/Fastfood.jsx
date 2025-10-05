import { Dishes } from 'components/Global/Dishes/Dishes';
import { Hero } from 'components/Hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFastFoodDishes } from 'store/fastfood/operations';
import {
  selectBurgers,
  selectHotDogs,
  selectRolls
} from 'store/fastfood/selectors';

const Fastfood = () => {
  const dispatch = useDispatch();

  const burgers = useSelector(selectBurgers);
  const rolls = useSelector(selectRolls);
  const hotDogs = useSelector(selectHotDogs);

  useEffect(() => {
    dispatch(getFastFoodDishes());
  }, [dispatch]);

  return (
    <>
      <Hero page="fastfood" />
      {burgers.length > 0 && (
        <Dishes title="burgers" dishes={burgers} styles="light" />
      )}
      {rolls.length > 0 && (
        <Dishes title="rolls" dishes={rolls} styles="light" />
      )}
      {hotDogs.length > 0 && (
        <Dishes title="hot_dogs" dishes={hotDogs} styles="dark" />
      )}
    </>
  );
};

export default Fastfood;
