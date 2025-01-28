import { FilterList } from '../consts';
import { OfferInterface } from '../types/places-type';

export const sortPlaces = (
  offers: OfferInterface[],
  filter: FilterList
): OfferInterface[] => {
  switch (filter) {
    case FilterList.Popular:
      return [...offers];

    case FilterList.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);

    case FilterList.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);

    case FilterList.TopRatedFirst:
      return [...offers].sort((a, b) => b.rating - a.rating);

    default:
      return [...offers];
  }
};
