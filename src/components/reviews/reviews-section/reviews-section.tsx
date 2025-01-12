import { ReviewType } from '../../../mocks/reviews';
import ReviewForm from '../add-review/reviewForm';
import OneReview from '../one-review';

type ReviewsSectionPropsType = {
  offerReviews: ReviewType[];
};

function ReviewsSection({ offerReviews }: ReviewsSectionPropsType) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{offerReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {offerReviews &&
          offerReviews.map((review) => (
            <OneReview review={review} key={review.comment} />
          ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewsSection;
