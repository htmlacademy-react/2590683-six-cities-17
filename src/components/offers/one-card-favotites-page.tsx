import { Link } from 'react-router-dom';
import PremiumItem from '../premium/premium';
import RatingItem from '../rating-item/rating-item';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { OfferInterface } from '../../types/places-type';

type OneCardFavoritesPageType = {
  card: OfferInterface;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
  activeOfferId: string | null;
};

function OneCardFavoritesPage({
  card,
  handleMouseEnter,
  handleMouseLeave,
  activeOfferId,
}: OneCardFavoritesPageType) {
  return (
    <article
      className="favorites__card place-card"
      onMouseEnter={() => handleMouseEnter(card.id)}
      onMouseLeave={handleMouseLeave}
    >
      {card.isPremium && <PremiumItem className={'place-card__mark'} />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <div>
          <img
            className="place-card__image"
            src={card.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </div>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {card && <BookmarkButton type="place-card" offer={card} />}
        </div>
        <RatingItem type="place" rating={card.rating} />
        <h2 className="place-card__name">
          <Link to={`/offer/${activeOfferId}`}>
            <div>{card.title}</div>
          </Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}
export default OneCardFavoritesPage;
