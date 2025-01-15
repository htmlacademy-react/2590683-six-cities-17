import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferInterface } from '../types/places-type';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import {
  loadOfferDetailedData,
  loadPlacesData,
  loadPlacesNearByData,
  requireAuthorization,
  setError,
  setOfferDetailedDataLoadingStatus,
  setOffersDataLoadingStatus,
} from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferInterface[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadPlacesData(data));
});

type FetchDetailedOfferParamsType = {
  offerId: string;
};

export const fetchDetailedOfferAction = createAsyncThunk<
  void,
  FetchDetailedOfferParamsType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchDetailedOffer', async ({ offerId }, { dispatch, extra: api }) => {
  dispatch(setOfferDetailedDataLoadingStatus(true));
  try {
    const offer = await api.get<OfferInterface>(
      `/six-cities/offers/${offerId}`
    );
    dispatch(loadOfferDetailedData(offer.data));

    const nearPlaces = await api.get<OfferInterface[]>(
      `/six-cities/offers/${offerId}/nearby`
    );
    dispatch(loadPlacesNearByData(nearPlaces.data));
  } catch (error) {
    console.error('Failed to fetch detailed offer:', error);
  } finally {
    dispatch(setOfferDetailedDataLoadingStatus(false));
  }
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk('error/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
