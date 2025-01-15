import { useState } from 'react';
import { OfferInterface } from '../../mocks/offers';
import TextForOffers from '../offers/with-text-for-offers';
import OneCardItem from '../offers/one-card-item';

type NeighbourhoodPlacesPropsType = {
  offers: OfferInterface[] | null;
};
function NeighbourhoodPlaces({ offers }: NeighbourhoodPlacesPropsType) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };
  return (
    <div className="container">
      <TextForOffers type="nearPlaces">
        {offers &&
          offers.map((offer) => (
            <OneCardItem
              className="near-places"
              key={offer.id}
              card={offer}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
      </TextForOffers>
    </div>
  );
}

export default NeighbourhoodPlaces;
