import { useEffect } from 'react';
import TextForOffers from '../offers/with-text-for-offers';
import OneOfferItem from '../offers/one-offer-item';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearByOffersAction } from '../../store/api-actions';

type NeighbourhoodPlacesPropsType = {
  offerId: string;
};
function NeighbourhoodPlaces({ offerId }: NeighbourhoodPlacesPropsType) {
  const dispatch = useAppDispatch();

  const nearByOffers = useAppSelector((state) => state.COMBINED.nearByOffers);
  const slicedPlaces = nearByOffers?.slice(0, 3) || [];

  useEffect(() => {
    if (!nearByOffers.length) {
      dispatch(fetchNearByOffersAction({ offerId }));
    }
  }, [dispatch, nearByOffers.length, offerId]);
  return (
    <div className="container">
      <TextForOffers type="nearPlaces">
        {slicedPlaces &&
          slicedPlaces.map((offer) => (
            <OneOfferItem
              className="near-places"
              key={offer.id}
              offer={offer}
            />
          ))}
      </TextForOffers>
    </div>
  );
}

export default NeighbourhoodPlaces;
