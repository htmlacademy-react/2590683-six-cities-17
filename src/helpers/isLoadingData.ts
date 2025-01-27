import { AuthorizationStatus } from '../consts';
import { useAppSelector } from '../hooks';
import { getOfferDetailedDataLoadingStatus } from '../store/offers-data/selectors';
import { getAuthorizationStatus } from '../store/user-process/selectors';

export const isLoadingData = () => {
  const isOfferLoading = useAppSelector(getOfferDetailedDataLoadingStatus);
  const isOffersDataLoading = useAppSelector(
    (state) => state.DATA.offersDataLoadingStatus
  );
  const isOffersNearByDataLoading = useAppSelector(
    (state) => state.DATA.nearByOffersLoadingStatus
  );
  const isReviewDataLoading = useAppSelector(
    (state) => state.REVIEWS.loadReviewOfferLoadingStatus
  );
  const isAuthLoading = useAppSelector((state) => state.USER.authLoadingStatus);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isFavoritesDataLoadingStatus = useAppSelector(
    (state) => state.FAVORITES.favoriteOffersDataLoadingStatus
  );
  return (
    isOfferLoading ||
    isOffersDataLoading ||
    isOffersNearByDataLoading ||
    isReviewDataLoading ||
    isFavoritesDataLoadingStatus ||
    isAuthLoading ||
    authorizationStatus === AuthorizationStatus.Unknown
  );
};
