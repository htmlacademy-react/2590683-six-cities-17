import React from 'react';

type RatingReviewFormPropsType = {
  setSelectedRating: (value: number | null) => void;
};

const RatingReviewForm = ({ setSelectedRating }: RatingReviewFormPropsType) => (
  <div className="reviews__rating-form form__rating">
    {[5, 4, 3, 2, 1].map((rating) => {
      let title;
      if (rating === 5) {
        title = 'Perfect';
      } else if (rating === 4) {
        title = 'Good';
      } else if (rating === 3) {
        title = 'Not bad';
      } else if (rating === 2) {
        title = 'Badly';
      } else {
        title = 'Terribly';
      }

      return (
        <React.Fragment key={rating}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={rating}
            id={`${rating}-stars`}
            type="radio"
            onClick={() => setSelectedRating(rating)}
          />
          <label
            htmlFor={`${rating}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
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

export default RatingReviewForm;
