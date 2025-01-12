import { OfferInterface } from '../mocks/offers';

export const sortPlaces = (
  offers: OfferInterface[],
  filter: string
): OfferInterface[] => {
  switch (filter) {
    case 'Popular':
      return [...offers];

    case 'Price: low to high':
      return [...offers].sort((a, b) => a.price - b.price);

    case 'Price: high to low':
      return [...offers].sort((a, b) => b.price - a.price);

    case 'Top rated first':
      return [...offers].sort((a, b) => b.rating - a.rating);

    default:
      return [...offers];
  }
};
