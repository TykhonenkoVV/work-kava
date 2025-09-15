import { FastfoodCategories } from 'components/Fastfood/FastfoodCategories';
import { Hero } from 'components/Hero/Hero';

const data = [
  {
    id: 1,
    category: 'Burgers',
    dishes: [
      {
        id: 11,
        index: 0,
        title: 'Hamburger',
        image: 'hamburger',
        price_standart: '45',
        price_double: '70',
        currency: '₴',
        ingredients:
          'wheat bran and wheat flour bun, beef cutlet, fresh tomatoes, sweet and sour sauce, pickled cucumbers, onion, lettuce leaves'
      },
      {
        id: 12,
        index: 1,
        title: 'Cheeseburger',
        image: 'cheeseburger',
        price_standart: '52',
        price_double: '80',
        currency: '₴',
        ingredients:
          'wheat bran and wheat flour bun, beef cutlet, cheese, fresh tomatoes, sweet and sour sauce, pickled cucumbers, onion, lettuce leaves'
      },
      {
        id: 13,
        index: 2,
        title: 'Black burger',
        image: 'black-burger',
        price_standart: '55',
        price_double: '85',
        currency: '₴',
        ingredients:
          'wheat bran and wheat flour bun with cuttlefish ink, beef cutlet, fresh tomatoes, sweet and sour sauce, pickled cucumbers, onion, lettuce leaves'
      },
      {
        id: 14,
        index: 3,
        title: 'Black burger',
        image: 'black-burger',
        price_standart: '55',
        price_double: '85',
        currency: '₴',
        ingredients:
          'wheat bran and wheat flour bun with cuttlefish ink, beef cutlet, fresh tomatoes, sweet and sour sauce, pickled cucumbers, onion, lettuce leaves'
      },
      {
        id: 15,
        index: 4,
        title: 'Black burger',
        image: 'black-burger',
        price_standart: '55',
        price_double: '85',
        currency: '₴',
        ingredients:
          'wheat bran and wheat flour bun with cuttlefish ink, beef cutlet, fresh tomatoes, sweet and sour sauce, pickled cucumbers, onion, lettuce leaves'
      }
    ],

    backgroundImage: 'burgers'
  },
  {
    id: 2,
    category: 'Rolls',
    dishes: [
      {
        id: 13,
        index: 0,
        title: 'Chicken roll',
        image: 'chicken-roll',
        price_standart: '70',
        price_xl: '90',
        currency: '₴',
        ingredients: ''
      },
      {
        id: 14,
        index: 1,
        title: 'Beef roll',
        image: 'beef-roll',
        price_standart: '75',
        price_xl: '95',
        currency: '₴',
        ingredients: ''
      },
      {
        id: 15,
        index: 2,
        title: 'Fish roll',
        image: 'fish-roll',
        price_standart: '75',
        price_xl: '95',
        currency: '₴',
        ingredients: ''
      },
      {
        id: 16,
        index: 3,
        title: 'Fish roll',
        image: 'fish-roll',
        price_standart: '75',
        price_xl: '95',
        currency: '₴',
        ingredients: ''
      }
    ],
    backgroundImage: 'rolls'
  },
  {
    id: 3,
    category: 'Hotdogs',
    dishes: [
      {
        id: 15,
        index: 0,
        title: 'Bavarian hotdog',
        image: 'bavarian-hotdog',
        price_standart: '40',
        price_double: '60',
        currency: '₴',
        ingredients: ''
      },
      {
        id: 16,
        index: 1,
        title: 'French hotdog',
        image: 'french-hotdog',
        price_standart: '35',
        price_double: '50',
        currency: '₴',
        ingredients: ''
      }
    ],
    backgroundImage: 'hotdogs'
  }
];

const Fastfood = () => {
  return (
    <>
      <Hero page="fastfood" />
      <FastfoodCategories data={data} />;
    </>
  );
};

export default Fastfood;
