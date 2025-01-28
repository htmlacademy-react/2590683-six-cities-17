import { NameSpace } from '../../consts';
import { ReviewType } from '../../types/review-type';
import { State } from '../../types/state';

export const getReviews = (state: State): ReviewType[] =>
  state[NameSpace.Reviews].reviews;

export const getLoadReviewOfferLoadingStatus = (state: State): boolean =>
  state[NameSpace.Reviews].loadReviewOfferLoadingStatus;
