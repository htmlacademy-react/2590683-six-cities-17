import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { userProcess } from './user-process/user-process';
import { reviewsData } from './reviews-data/reviews-data';
import { combinedData } from './combined-data/combined-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.Combined]: combinedData.reducer,
});
