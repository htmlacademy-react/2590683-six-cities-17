import { OfferInterface } from './offers';

export const neighbourhoodPlaces: OfferInterface[] = [
  {
    id: 'f0d05771-5646-4129-b74c-1ba82e3e85fd',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 214,
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
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
  },
  {
    id: '8583042b-6291-4035-8bdf-88947ca4ac89',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 221,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
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
    rating: 2.5,
  },
  {
    id: '076bb8d0-138a-4621-9218-07b891d4ee6e',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 212,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
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
];
