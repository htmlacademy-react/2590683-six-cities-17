import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from '../types/user-data';
import { AppDispatch } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../consts';
import { DetailedOfferInterface, OfferInterface } from '../types/places-type';
import { FetchOfferParamsType } from '../types/fetch-params';
import { AuthData } from '../types/auth-data';
import { ReviewType } from '../types/review-type';
import {
  FetchAddReviewActionParamsType,
  FetchChangeFavoriteStatusType,
} from '../types/favorites';
import { AUTH_TOKEN_KEY_NAME, dropToken, saveToken } from '../services/token';
import { RootState } from '.';

export const fetchOffersAction = createAsyncThunk<
  OfferInterface[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferInterface[]>(APIRoute.Offers);
  return data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  OfferInterface[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferInterface[]>(APIRoute.Favorite);
  return data;
});

export const fetchDetailedOfferAction = createAsyncThunk<
  DetailedOfferInterface,
  FetchOfferParamsType,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchDetailedOffer', async ({ offerId }, { extra: api }) => {
  const { data } = await api.get<DetailedOfferInterface>(
    `${APIRoute.Offers}/${offerId}`
  );

  return data;
});

export const fetchNearByOffersAction = createAsyncThunk<
  OfferInterface[],
  FetchOfferParamsType,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchNearByOffers', async ({ offerId }, { extra: api }) => {
  const { data } = await api.get<OfferInterface[]>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  return data;
});

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { extra: api }) => {
  const { data } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  const { token } = data;
  saveToken(token);
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});

export const changeFavoriteStatusAction = createAsyncThunk<
  OfferInterface,
  FetchChangeFavoriteStatusType,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('offer/changeFavoriteStatus', async ({ id, status }, { extra: api }) => {
  const { data } = await api.post<OfferInterface>(
    `${APIRoute.Favorite}/${id}/${status}`
  );
  return data;
});

export const fetchLoadReviewsOfferDataAction = createAsyncThunk<
  ReviewType[],
  FetchOfferParamsType,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>('data/fetchLoadReviewsOffer', async ({ offerId }, { extra: api }) => {
  const { data } = await api.get<ReviewType[]>(
    `${APIRoute.Comments}/${offerId}`
  );
  return data;
});

export const fetchAddReviewAction = createAsyncThunk<
  ReviewType,
  FetchAddReviewActionParamsType,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/fetchAddReview',
  async ({ comment, rating, offerId }, { extra: api }) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    if (!token) {
      throw new Error('Token is missing');
    }
    const { data } = await api.post<ReviewType>(
      `${APIRoute.Comments}/${offerId}`,
      { comment, rating },
      {
        headers: {
          'x-token': token,
        },
      }
    );
    return data;
  }
);
