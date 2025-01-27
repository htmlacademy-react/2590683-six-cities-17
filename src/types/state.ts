import { AuthorizationStatus, Cities } from '../consts.js';
import { store } from '../store/index.js';
import { DetailedOfferInterface, OfferInterface } from './places-type.js';
import { ReviewType } from './review-type.js';
import { UserData } from './user-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authLoadingStatus: boolean;
  userData: UserData | null;
};

export type OfferData = {
  currentCity: Cities;
  offers: OfferInterface[] | null;
  offersDataLoadingStatus: boolean;
  detailedOffer: DetailedOfferInterface | null;
  offerDetailedDataLoadingStatus: boolean;
  nearByOffers: OfferInterface[];
  nearByOffersLoadingStatus: boolean;
  error: string | undefined;
};

export type FavoritesData = {
  favorites: OfferInterface[] | null;
  favoriteOffersDataLoadingStatus: boolean;
};

export type ReviewsData = {
  reviews: ReviewType[];
  loadReviewOfferLoadingStatus: boolean;
};
