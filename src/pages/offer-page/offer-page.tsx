import { useParams } from 'react-router';
import Header from '../../components/header/header';
import PremiumItem from '../../components/premium-item/premium-item';
import RatingItem from '../../components/rating-item/rating-item';
import ReviewsSection from '../../components/reviews/reviews-section/reviews-section';
import { getCityInfomation } from '../../helpers/coord-city';
import MapView from '../../components/map-view/map-view';
import NeighbourhoodPlaces from '../../components/neighbourhood-places/neighbourhood-places';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchDetailedOfferAction,
  fetchFavoriteOffersAction,
  fetchNearByOffersAction,
} from '../../store/api-actions';
import { useEffect, useMemo } from 'react';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { AppRoute, OFFER__HOST_TITLE } from '../../consts';
import LoadingScreen from '../loading-screen/loading-screen';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function OfferPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isDeteiledOfferLoading = useAppSelector(
    (state) => state.COMBINED.offerDetailedDataLoadingStatus
  );
  const allNeighbourhoodPlaces = useAppSelector(
    (state) => state.COMBINED.nearByOffers
  );

  const offer = useAppSelector((state) => state.COMBINED.detailedOffer);
  const slicedPlaces = useMemo(
    () =>
      offer
        ? [offer, ...(allNeighbourhoodPlaces?.slice(0, 3) || [])]
        : allNeighbourhoodPlaces?.slice(0, 3) || [],
    [offer, allNeighbourhoodPlaces]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        toast.error('Invalid offer ID');
        navigate(AppRoute.Any);
        return;
      }

      try {
        await dispatch(fetchFavoriteOffersAction());
        const result = await dispatch(
          fetchDetailedOfferAction({ offerId: id })
        );
        if (fetchDetailedOfferAction.rejected.match(result)) {
          toast.error(`Error: ${result.error.message}`);
          navigate(AppRoute.Any);
        }
        await dispatch(fetchNearByOffersAction({ offerId: id }));
      } catch (error) {
        toast.error('An unexpected error occurred.');
      }
    };

    fetchData();
  }, [id, dispatch, navigate]);

  if (isDeteiledOfferLoading || !offer) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.slice(0, 6).map((link) => (
                <div className="offer__image-wrapper" key={link}>
                  <img className="offer__image" src={link} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <PremiumItem className="offer__mark" />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <BookmarkButton type="offer" offer={offer} />
              </div>
              <RatingItem rating={offer.rating} type="offer" />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms === 1
                    ? '1 Bedroom'
                    : `${offer.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max{' '}
                  {offer.maxAdults === 1
                    ? '1 adult'
                    : `${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((goodItem) => (
                    <li className="offer__inside-item" key={goodItem}>
                      {goodItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">{OFFER__HOST_TITLE}</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offer.host?.isPro ? 'offer__avatar-wrapper--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host?.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host?.name}</span>
                  {offer.host?.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <ReviewsSection offerId={offer.id} />
            </div>
          </div>
          {slicedPlaces.length > 0 && (
            <MapView
              cityInfomation={getCityInfomation(offer)}
              points={slicedPlaces}
              type={'offer'}
            />
          )}
        </section>
        {slicedPlaces.length > 0 && <NeighbourhoodPlaces offerId={offer.id} />}
      </main>
    </div>
  );
}
