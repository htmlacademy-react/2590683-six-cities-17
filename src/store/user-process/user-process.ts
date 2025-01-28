import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../consts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  authLoadingStatus: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authLoadingStatus = false;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.authLoadingStatus = true;
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authLoadingStatus = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authLoadingStatus = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.authLoadingStatus = true;
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authLoadingStatus = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
