import { createAction } from '@reduxjs/toolkit';
import { OfferInterface } from '../types/places-type';
import { AuthorizationStatus } from '../consts';

export const placesOfChoosedCity = createAction<string>('places/choosedCity');

export const onePlaceData = createAction<string>('places/onePlaceData');

export const loadPlacesData = createAction<OfferInterface[]>('data/loadPlaces');

export const loadOfferDetailedData = createAction<OfferInterface>(
  'data/loadDetailedOffer'
);

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setOffersDataLoadingStatus = createAction<boolean>(
  'data/setOffersDataLoadingStatus'
);

export const loadPlacesNearByData = createAction<OfferInterface[]>(
  'data/loadPlacesNearBy'
);

export const setOfferDetailedDataLoadingStatus = createAction<boolean>(
  'data/setOffersDetailedDataLoadingStatus'
);

export const setError = createAction<string | null>('error/setError');
