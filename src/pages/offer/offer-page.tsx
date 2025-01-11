import { useParams } from 'react-router';
import Header from '../../components/header/header';
import PremiumItem from '../../components/premium/premium';
import RatingItem from '../../components/rating-item/rating-item';
import { reviewsArray } from '../../mocks/reviews';
import { mockOffer } from '../../mocks/offers';
import ReviewsSection from '../../components/reviews/reviews-section/reviews-section';
import { getCityInfomation } from '../../helpers/coord-city';
import MapView from '../../components/map-view/map-view';
import { neighbourhoodPlaces } from '../../mocks/neighbourhood-places';
import NeighbourhoodPlaces from '../../components/neighbourhood-places/neighbourhood-places';

export default function OfferPage() {
  const { id } = useParams();
  const offer = mockOffer;
  const offerReviews = reviewsArray;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images &&
                offer.images.map((link) => (
                  <div className="offer__image-wrapper" key={link}>
                    <img
                      className="offer__image"
                      src={link}
                      alt="Photo studio"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumItem className={'offer__mark'} />

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer?.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <RatingItem rating={offer?.rating ?? 0} type="offer" />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer?.goods?.map((goodItem) => (
                    <li className="offer__inside-item" key={goodItem}>
                      {goodItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offer?.host?.isPro && 'offer__avatar-wrapper--pro'
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer?.host?.avatarUrl && offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer?.host?.name && offer.host.name}
                  </span>
                  {offer?.host?.isPro && offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer?.description}</p>
                </div>
              </div>
              <ReviewsSection offerReviews={offerReviews} />
            </div>
          </div>
          {offer && (
            <MapView
              cityInfomation={getCityInfomation(offer)}
              points={neighbourhoodPlaces}
              type={'offer'}
            />
          )}
        </section>
        <div className="container">
          <NeighbourhoodPlaces offers={neighbourhoodPlaces} />
        </div>
      </main>
    </div>
  );
}
