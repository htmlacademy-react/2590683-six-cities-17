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
    id: 'aa7fa55f-2487-4838-be12-7f78ff97f483',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'aa7fa55f-2487-4838-be12-7f78ff97f483',
    date: '2019-06-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true,
    },
    comment: 'A quiet cozy and lightness of Amsterdam.',
    rating: 3,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    comment: 'Lightness of Amsterdam.',
    rating: 5,
  },
];
