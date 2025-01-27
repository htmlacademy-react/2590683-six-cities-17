import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { FavoritesData } from '../../types/state';
import {
  changeFavoriteStatusAction,
  fetchFavoriteOffersAction,
} from '../api-actions';

const initialState: FavoritesData = {
  favorites: null,
  favoriteOffersDataLoadingStatus: false,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
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
        if (state.favorites !== null) {
          action.payload.isFavorite
            ? state.favorites.push(action.payload)
            : (state.favorites = state.favorites.filter(
                (offer) => offer.id !== action.payload.id
              ));
        }
        // store.dispatch(fetchFavoriteOffersAction());
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

export default favoritesData.reducer;
