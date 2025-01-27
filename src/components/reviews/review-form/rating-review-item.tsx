import React from 'react';

type RatingReviewItemPropsType = {
  setSelectedRating: (value: number) => void;
  isSubmitting: boolean;
  selectedRating: number;
};

const RatingReviewItem = ({
  setSelectedRating,
  isSubmitting,
  selectedRating,
}: RatingReviewItemPropsType) => {
  return (
    <div className="reviews__rating-form form__rating">
      {[5, 4, 3, 2, 1].map((rating) => {
        let title;
        if (rating === 5) {
          title = 'perfect';
        } else if (rating === 4) {
          title = 'good';
        } else if (rating === 3) {
          title = 'not bad';
        } else if (rating === 2) {
          title = 'badly';
        } else {
          title = 'terribly';
        }

        return (
          <React.Fragment key={rating}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${rating}-stars`}
              type="radio"
              disabled={isSubmitting}
              checked={selectedRating === rating}
              readOnly
            />
            <label
              htmlFor={`${rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
              onClick={() => setSelectedRating(rating)}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RatingReviewItem;
