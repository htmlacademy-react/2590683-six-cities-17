import { Cities } from '../consts';

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface OfferInterface {
  id: string;
  title: string;
  description?: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  previewImage?: string;
  images?: string[];
  city: {
    location: Location;
    name: (typeof Cities)[number];
  };
  location: Location;
  goods?: string[];
  host?: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms?: number;
  maxAdults?: number;
}

export const mockOffers: OfferInterface[] = [
  {
    id: 'aa7fa55f-2487-4838-be12-7f78ff97f483',
    title: 'Wood and stone place',
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'hotel',
    price: 477,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
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
    goods: [
      'Dishwasher',
      'Baby seat',
      'Breakfast',
      'Laptop friendly workspace',
      'Washing machine',
      'Coffee machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    bedrooms: 4,
    maxAdults: 8,
  },
  {
    id: '8c20f919-cf85-477a-8f1b-a1a2f9cecd4c',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 111,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
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
    isFavorite: true,
    isPremium: false,
    rating: 1.3,
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    ],
    goods: ['Laptop friendly workspace', 'Wi-Fi', 'Washer', 'Cable TV'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 1,
  },
  {
    id: '7a63ef05-3c57-47eb-a76d-c08b246ff4eb',
    title: 'House in countryside',
    type: 'hotel',
    price: 347,
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
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    ],
    goods: ['Laptop friendly workspace', 'Wi-Fi', 'Washer', 'Cable TV'],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 1,
  },
  {
    id: 'a3edec12-aa95-41c4-8a04-29e17e817d39',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 380,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
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
    isFavorite: true,
    isPremium: false,
    rating: 1.4,
    description:
      'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    ],
    goods: [
      'Wi-Fi',
      'Fridge',
      'Coffee machine',
      'Washing machine',
      'Washer',
      'Kitchen',
      'Towels',
      'Cable TV',
      'Dishwasher',
      'Heating',
      'Air conditioning',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 8,
  },
  {
    id: 'a364a900-6b0d-49e1-bf9b-0a8af89b466d',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 413,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
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
    isFavorite: true,
    isPremium: false,
    rating: 3.7,
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    goods: [
      'Wi-Fi',
      'Air conditioning',
      'Washing machine',
      'Cable TV',
      'Towels',
      'Kitchen',
      'Coffee machine',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Laptop friendly workspace',
      'Fridge',
      'Dishwasher',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    bedrooms: 1,
    maxAdults: 7,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    ],
  },
];
