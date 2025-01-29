import { AppRoute } from '../../consts';
import { OfferInterface } from '../../types/places-type';
import BookmarkButton from '../bookmark-button/bookmark-button';
import PremiumItem from '../premium-item/premium-item';
import RatingItem from '../rating-item/rating-item';
import { Link } from 'react-router-dom';

type OneOfferItemProps = {
  offer: OfferInterface;
  handleMouseEnter?: (id: string) => void;
  handleMouseLeave?: () => void;
  className: string;
};

export default function OneOfferItem({
  offer,
  handleMouseEnter = () => {},
  handleMouseLeave = () => {},
  className,
}: OneOfferItemProps) {
  const roundedRating = Math.round(offer.rating);

  return (
    <article
      className={`cities__card place-card ${
        className ? `${className}__card` : ''
      }`}
      onMouseEnter={() => handleMouseEnter(offer.id)}
      onMouseLeave={handleMouseLeave}
    >
      {offer && offer.isPremium && <PremiumItem className="place-card__mark" />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <div>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {offer && <BookmarkButton type="place-card" offer={offer} />}
        </div>
        <RatingItem type="place" rating={roundedRating} />
        <h2 className="place-card__name">
          <Link
            key={offer.id}
            to={
              offer.id ? AppRoute.Offer.replace(':id', offer.id) : AppRoute.Root
            }
          >
            <div>{offer.title}</div>
          </Link>
        </h2>

        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
