import { OfferInterface } from '../../mocks/offers';
import PremiumItem from '../premium/premium';
import RatingItem from '../ratingItem/ratingItem';

type OneCardPageProps = {
  card: OfferInterface;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
};

export default function OneCardMainPage({
  card,
  handleMouseEnter,
  handleMouseLeave,
}: OneCardPageProps) {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => handleMouseEnter(card.id)}
      onMouseLeave={handleMouseLeave}
    >
      {card.isPremium && <PremiumItem className={'place-card__mark'} />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <div>
          <img
            className="place-card__image"
            src={card.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </div>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              card.isFavorite ? 'place-card__bookmark-button--active ' : ' '
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {`${card.isFavorite ? 'In bookmarks' : 'To bookmarks'}`}
            </span>
          </button>
        </div>
        <RatingItem type="place" rating={card.rating} />
        <h2 className="place-card__name">
          <div>{card.title}</div>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}
