import { CardType } from './types/CardType';

export const mockCards: CardType[] = [
  {
    id: 'c6aad6d5-3d9d-48b7-900b-db95bbffae37',
    title: 'House in countryside',
    type: 'hotel',
    price: 470,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4,
  },
  {
    id: 'bd022d00-ea10-4ac7-ba74-7ac1c71cee0e',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 245,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4,
  },
  {
    id: 'f92b9578-227b-4fde-a686-de26e2a69c29',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 295,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
  },
  {
    id: 'f062d75d-03d9-4813-9d1c-29628ef0e24a',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 477,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.2,
  },
  {
    id: 'f549eb49-baa2-4fc9-8970-6269ab24afac',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 262,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5,
  },
];

export const isAuth = false;
