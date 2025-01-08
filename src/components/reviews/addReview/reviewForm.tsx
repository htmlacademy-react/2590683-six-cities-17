import { useState } from 'react';
import RatingReviewForm from './ratingReviewForm';

const ReviewForm = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const [textReview, setTextReview] = useState('');
  const handleChangeTextReview = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextReview(event.target.value);
  };

  const buttonFlag = () => textReview.length > 49 && selectedRating !== null;
  return (
    <form
      className="reviews__form form"
      // action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingReviewForm setSelectedRating={setSelectedRating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textReview}
        onChange={handleChangeTextReview}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!buttonFlag()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
