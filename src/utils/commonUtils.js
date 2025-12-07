export const homeSections = [
  {
    id: '1',
    title: 'cafe',
    description: 'description_cafe',
    linkTo: '/cafe'
  },
  {
    id: '2',
    title: 'fastfood',
    description: 'description_fasfood',
    linkTo: '/fastfood'
  },
  {
    id: '3',
    title: 'coworking',
    description: 'description_cafe',
    linkTo: '/coworking'
  }
];

export const coworkingSections = [
  {
    id: '01',
    title: 'workplace',
    description: 'description_workplace'
  },
  {
    id: '02',
    title: 'meeting_room',
    description: 'description_meeting_room'
  },
  {
    id: '03',
    title: 'workshop',
    description: 'description_workshop'
  }
];

export const GetBookingInfo = bookType => {
  switch (bookType) {
    case 'workplace':
      return {
        price: 50,
        title: 'book_now_place'
      };

    case 'meeting-room':
      return {
        price: 300,
        title: 'book_now_meeting_room'
      };
    case 'workshop':
      return {
        price: 800,
        title: 'book_now_workshop'
      };
    default:
      throw new Error('Not supported book type');
  }
};

export const backgroundColors = [
  '#fffabaff',
  '#bdff99',
  '#ffc999',
  '#f1c2f2',
  '#d8f1fe',
  '#f5ffb9'
];
