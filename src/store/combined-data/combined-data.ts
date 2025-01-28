import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../consts';
import { FavoritesData, OfferData } from '../../types/state';
import {
  changeFavoriteStatusAction,
  fetchFavoriteOffersAction,
  fetchDetailedOfferAction,
  fetchNearByOffersAction,
  fetchOffersAction,
} from '../api-actions';

const initialState: OfferData & FavoritesData = {
  currentCity: Cities.Paris,
  offers: null,
  offersDataLoadingStatus: false,
  detailedOffer: null,
  offerDetailedDataLoadingStatus: false,
  nearByOffers: [],
  nearByOffersLoadingStatus: false,
  error: undefined,
  favorites: null,
  favoriteOffersDataLoadingStatus: false,
};

export const combinedData = createSlice({
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

    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoriteOffersDataLoadingStatus = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.favoriteOffersDataLoadingStatus = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.favoriteOffersDataLoadingStatus = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.favoriteOffersDataLoadingStatus = false;
        if (state.offers) {
          state.offers = state.offers.map((offer) =>
            offer.id === updatedOffer.id ? updatedOffer : offer
          );
        }
        if (state.detailedOffer?.id === updatedOffer.id) {
          state.detailedOffer.isFavorite = updatedOffer.isFavorite;
        }
        state.nearByOffers = state.nearByOffers.map((offer) =>
          offer.id === updatedOffer.id ? updatedOffer : offer
        );
        if (state.favorites) {
          if (updatedOffer.isFavorite) {
            if (
              !state.favorites.some((offer) => offer.id === updatedOffer.id)
            ) {
              state.favorites.push(updatedOffer);
            }
          } else {
            state.favorites = state.favorites.filter(
              (offer) => offer.id !== updatedOffer.id
            );
          }
        } else {
          state.favorites = updatedOffer.isFavorite ? [updatedOffer] : [];
        }
        state.favoriteOffersDataLoadingStatus = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.favoriteOffersDataLoadingStatus = true;
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.favoriteOffersDataLoadingStatus = false;
      });
  },
});

export const { setCurrentCity } = combinedData.actions;
export default combinedData.reducer;
