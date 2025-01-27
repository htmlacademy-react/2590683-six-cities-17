import { NameSpace } from '../../consts';
import {
  DetailedOfferInterface,
  OfferInterface,
} from '../../types/places-type';
import { State } from '../../types/state';

export const getAllOffers = (state: State): OfferInterface[] =>
  state[NameSpace.Data].offers;

export const getOffersLoadStatus = (state: State): boolean =>
  state[NameSpace.Data].offersDataLoadingStatus;

export const getDetailedOffer = (state: State): DetailedOfferInterface | null =>
  state[NameSpace.Data].detailedOffer;

export const getOfferDetailedDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].offerDetailedDataLoadingStatus;

export const getNearByOffers = (state: State): OfferInterface[] =>
  state[NameSpace.Data].nearByOffers;

export const nearByOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].nearByOffersLoadingStatus;
