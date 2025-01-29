import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { fetchAddReviewAction } from '../../../store/api-actions';
import RatingReviewItem from './rating-review-item';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import {
  REVIEWS_FORM_LABEL,
  REVIEWS__HELP_1,
  REVIEWS__HELP_2,
  REVIEWS__STAR_TITLE,
  REVIEWS__TEXT_AMOUNT,
} from '../../../consts';
interface ReviewFormProps {
  Id: string;
}

const ReviewForm = ({ Id }: ReviewFormProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [textReview, setTextReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeTextReview = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextReview(event.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    const handleSubmit = async () => {
      try {
        await dispatch(
          fetchAddReviewAction({
            comment: textReview,
            rating: selectedRating,
            offerId: Id,
          })
        ).unwrap();

        toast.success('Комментарий успешно отправлен!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setSelectedRating(0);
        setTextReview('');
      } catch {
        toast.error(
          'Ошибка отправки комментария! Проверьте данные и повторите попытку!',
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          }
        );
      } finally {
        setIsSubmitting(false);
      }
    };
    void handleSubmit();
  };

  const isButtonEnabled = () =>
    textReview.length > 49 && textReview.length < 301 && selectedRating !== 0;

  useEffect(() => {
    if (location.pathname !== `/offer/${Id}`) {
      setSelectedRating(0);
      setTextReview('');
    }
  }, [location, Id]);

  return (
    <form className="reviews__form form" onSubmit={submitHandler}>
      <label className="reviews__label form__label" htmlFor="review">
        {REVIEWS_FORM_LABEL}
      </label>
      <RatingReviewItem
        setSelectedRating={setSelectedRating}
        isSubmitting={isSubmitting}
        selectedRating={selectedRating}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textReview}
        onChange={handleChangeTextReview}
        disabled={isSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          {REVIEWS__HELP_1}{' '}
          <span className="reviews__star">{REVIEWS__STAR_TITLE}</span>{' '}
          {REVIEWS__HELP_2}{' '}
          <b className="reviews__text-amount">{REVIEWS__TEXT_AMOUNT}</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isButtonEnabled() || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
