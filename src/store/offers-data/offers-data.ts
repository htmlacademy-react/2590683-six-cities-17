import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../consts';
import { OfferData } from '../../types/state';
import {
  fetchDetailedOfferAction,
  fetchNearByOffersAction,
  fetchOffersAction,
} from '../api-actions';

const initialState: OfferData = {
  currentCity: Cities.Paris,
  offers: null,
  offersDataLoadingStatus: false,
  detailedOffer: null,
  offerDetailedDataLoadingStatus: false,
  nearByOffers: [],
  nearByOffersLoadingStatus: false,
  error: undefined,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<Cities>) => {
      state.currentCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;

        state.offersDataLoadingStatus = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersDataLoadingStatus = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersDataLoadingStatus = false;
      })
      .addCase(fetchDetailedOfferAction.fulfilled, (state, action) => {
        state.detailedOffer = action.payload;
        state.offerDetailedDataLoadingStatus = false;
      })
      .addCase(fetchDetailedOfferAction.pending, (state) => {
        state.offerDetailedDataLoadingStatus = true;
      })
      .addCase(fetchDetailedOfferAction.rejected, (state) => {
        state.offerDetailedDataLoadingStatus = false;
      })
      .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
        state.nearByOffersLoadingStatus = false;
      })
      .addCase(fetchNearByOffersAction.pending, (state) => {
        state.nearByOffersLoadingStatus = true;
      })
      .addCase(fetchNearByOffersAction.rejected, (state) => {
        state.nearByOffersLoadingStatus = false;
      });
  },
});

export const { setCurrentCity } = offersData.actions;
