import { createReducer } from '@reduxjs/toolkit';
import {
  loadOfferDetailedData,
  loadPlacesData,
  loadPlacesNearByData,
  placesOfChoosedCity,
  requireAuthorization,
  setError,
  setOfferDetailedDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';
import { OfferInterface } from '../types/places-type';
import { AuthorizationStatus } from '../consts';

type initialType = {
  choosedCity: string;
  placesInChoosedCity: OfferInterface[];
  placesAllData: OfferInterface[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  detailedOffer: OfferInterface | null;
  isOfferDetailedDataLoading: boolean;
  error: string | null;
  placesNearBy: OfferInterface[] | null;
};

const initialState: initialType = {
  choosedCity: 'Paris',
  placesInChoosedCity: [],
  placesAllData: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  detailedOffer: null,
  isOfferDetailedDataLoading: false,
  error: null,
  placesNearBy: null,
};

const reducer = createReducer(initialState, async (builder) => {
  builder
    .addCase(loadPlacesData, (state, action) => {
      state.placesAllData = action.payload;
      state.placesInChoosedCity = state.placesAllData.filter(
        (place) => place.city.name === state.choosedCity
      );
    })
    .addCase(placesOfChoosedCity, (state, action) => {
      if (action) {
        const choosedCity = action.payload;
        state.choosedCity = choosedCity;
      }
      state.placesInChoosedCity = state.placesAllData.filter(
        (place) => place.city.name === state.choosedCity
      );
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOfferDetailedData, (state, action) => {
      state.detailedOffer = action.payload;
    })
    .addCase(setOfferDetailedDataLoadingStatus, (state, action) => {
      state.isOfferDetailedDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPlacesNearByData, (state, action) => {
      state.placesNearBy = action.payload;
    });
});

export { reducer };
