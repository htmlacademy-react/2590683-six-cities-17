import { createAction } from '@reduxjs/toolkit';

export const placesOfChoosedCity = createAction<string>('places/choosedCity');

export const onePlaceData = createAction<string>('places/onePlaceData');
