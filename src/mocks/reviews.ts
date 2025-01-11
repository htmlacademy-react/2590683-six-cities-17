export type ReviewType = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export const reviewsArray: ReviewType[] = [
  {
    id: '99a6e32c-fdb5-415d-abf3-7abcdf1a3cf2',
    comment:
      'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2024-12-20T21:00:00.086Z',
    rating: 4,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: false,
    },
  },
  {
    id: '210e6a2a-4c15-4447-a2ad-ad0caab05db5',
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2024-12-19T21:00:00.086Z',
    rating: 4,
    user: {
      name: 'Zak',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: false,
    },
  },
  {
    id: '2dd54908-b2ca-4722-a185-04ad4f6e3fee',
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2024-12-18T21:00:00.086Z',
    rating: 2,
    user: {
      name: 'Max',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
  {
    id: '4d94b1a6-ae0b-4a4b-b9d9-c735d73b9d97',
    comment:
      '111 What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2025-01-11T13:13:21.755Z',
    rating: 1,
    user: {
      name: 'test',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false,
    },
  },
  {
    id: 'e378c434-42de-4d32-830b-92c7b5d083ba',
    comment:
      '12345 The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2025-01-11T13:14:43.748Z',
    rating: 3,
    user: {
      name: 'test',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false,
    },
  },
];
