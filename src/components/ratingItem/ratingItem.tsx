type RatingItemPropsType = {
  rating: number;
  type: 'offer' | 'review' | 'place';
};

function RatingItem({ rating, type }: RatingItemPropsType) {
  const widthStar = (rating / 5) * 100;

  return (
    <>
      {type === 'offer' && (
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${widthStar}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{rating}</span>
        </div>
      )}
      {type === 'review' && (
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${widthStar}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
      )}
      {type === 'place' && (
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${widthStar}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RatingItem;
