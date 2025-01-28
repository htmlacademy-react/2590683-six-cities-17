import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/state';
import { NameSpace } from '../../consts';
import {
  fetchAddReviewAction,
  fetchLoadReviewsOfferDataAction,
} from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  loadReviewOfferLoadingStatus: false,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLoadReviewsOfferDataAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loadReviewOfferLoadingStatus = false;
      })
      .addCase(fetchLoadReviewsOfferDataAction.pending, (state) => {
        state.loadReviewOfferLoadingStatus = true;
      })
      .addCase(fetchLoadReviewsOfferDataAction.rejected, (state) => {
        state.loadReviewOfferLoadingStatus = false;
      })
      .addCase(fetchAddReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.loadReviewOfferLoadingStatus = false;
      });
    // .addCase(fetchAddReviewAction.pending, (state) => {
    //   state.loadReviewOfferLoadingStatus = true;
    // });
    // .addCase(fetchAddReviewAction.rejected, (state, payload) => {
    // })
  },
});
