import { useEffect } from 'react';
import TextForOffers from '../offers/with-text-for-offers';
import OneOfferItem from '../offers/one-offer-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNearByOffers } from '../../store/offers-data/selectors';
import { fetchNearByOffersAction } from '../../store/api-actions';

type NeighbourhoodPlacesPropsType = {
  offerId: string;
  setActiveOfferId: (id: string | null) => void;
};
function NeighbourhoodPlaces({
  offerId,
  setActiveOfferId,
}: NeighbourhoodPlacesPropsType) {
  const dispatch = useAppDispatch();
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };

  const nearByOffers = useAppSelector(getNearByOffers);
  const slicedPlaces = nearByOffers?.slice(0, 3) || [];

  useEffect(() => {
    if (!nearByOffers.length) {
      dispatch(fetchNearByOffersAction({ offerId }));
    }
  }, [dispatch]);
  return (
    <div className="container">
      <TextForOffers type="nearPlaces">
        {slicedPlaces &&
          slicedPlaces.map((offer) => (
            <OneOfferItem
              className="near-places"
              key={offer.id}
              offer={offer}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
      </TextForOffers>
    </div>
  );
}

export default NeighbourhoodPlaces;
