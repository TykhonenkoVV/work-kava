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
