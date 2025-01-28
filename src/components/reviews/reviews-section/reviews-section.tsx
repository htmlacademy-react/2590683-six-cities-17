import ReviewForm from '../review-form/review-form';
import OneReview from '../one-review';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getReviews } from '../../../store/reviews-data/selectors';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { AuthorizationStatus, REVIEWS__TITLE } from '../../../consts';
import { useEffect } from 'react';
import { fetchLoadReviewsOfferDataAction } from '../../../store/api-actions';

type ReviewsSectionPropsType = {
  offerId: string;
};

function ReviewsSection({ offerId }: ReviewsSectionPropsType) {
  const dispatch = useAppDispatch();
  const offerReviews = useAppSelector(getReviews);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const processedReviews =
    offerReviews &&
    [...offerReviews]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10);

  useEffect(() => {
    const fetchData = async () => {
      if (!offerReviews.length && offerId) {
        await dispatch(fetchLoadReviewsOfferDataAction({ offerId }));
      }
    };

    fetchData();
  }, [offerId, dispatch, offerReviews.length]);

  return !offerReviews || (offerReviews.length === 0 && offerId) ? null : (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        {REVIEWS__TITLE} &middot;{' '}
        <span className="reviews__amount">{offerReviews?.length}</span>
      </h2>
      <ul className="reviews__list">
        {processedReviews &&
          processedReviews.map((review) => (
            <OneReview review={review} key={review.id} />
          ))}
      </ul>
      {authStatus === AuthorizationStatus.Auth && <ReviewForm Id={offerId} />}
    </section>
  );
}

export default ReviewsSection;
