import { NameSpace } from '../../consts';
import { OfferInterface } from '../../types/places-type';
import { State } from '../../types/state';

export const getFavorites = (state: State): OfferInterface[] | null =>
  state[NameSpace.Favorites].favorites;

export const getOffersLoadStatus = (state: State): boolean =>
  state[NameSpace.Favorites].favoriteOffersDataLoadingStatus;
