import { devices } from 'styles';

export const imgSizes = [
  {
    media: devices.desktop,
    width: 730,
    height: 714
  },
  {
    media: devices.tablet,
    width: 532,
    height: 520
  },
  {
    media: devices.mobile,
    width: 358,
    height: 238
  }
];

export const homeSections = [
  {
    id: '1',
    title: 'Cafe',
    description:
      'Work with taste! Delicious aromatic coffee for every taste prepared ' +
      'by an experienced barista, as well as elegant desserts made with ' +
      "love by our confectioners. It's all waiting for you in our coffee " +
      'shop.',
    linkTo: '/cafe'
  },
  {
    id: '2',
    title: 'Fastfood',
    description:
      'Time for lunch, but not much time? Our fast food is at your service. ' +
      'Fast, high quality, tasty. Own baking and certified products. Great ' +
      'choice for every taste.',
    linkTo: '/fastfood'
  },
  {
    id: '3',
    title: 'Coworking',
    description:
      'Work with taste! Delicious aromatic coffee for every taste prepared ' +
      'by an experienced barista, as well as elegant desserts made with ' +
      "love by our confectioners. It's all waiting for you in our coffee " +
      'shop.',
    linkTo: '/coworking'
  }
];

export const coworkingSections = [
  {
    id: '01',
    title: 'Workplace',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.'
  },
  {
    id: '02',
    title: 'Meeting room',
    description:
      'For business meetings, we suggest using a soundproofed room, which is equipped with everything you need.'
  },
  {
    id: '03',
    title: 'Workshop',
    description:
      'Convenience, comfort and delicious coffee, what else is needed for productive work? Work with the feeling that you are at home.'
  }
];

export const GetBookingInfo = bookType => {
  console.log(bookType);

  switch (bookType) {
    case 'workplace':
      return {
        price: 50,
        title: 'Book a workplace'
      };

    case 'meeting-room':
      return {
        price: 300,
        title: 'Book a meeting room'
      };
    case 'workshop':
      return {
        price: 800,
        title: 'Book a workshop'
      };
    default:
      throw new Error('Not supported book type');
  }
};

export const backgroundColors = [
  '#ffffff',
  '#bdff99',
  '#ffc999',
  '#f1c2f2',
  '#d8f1fe',
  '#f5ffb9'
];
