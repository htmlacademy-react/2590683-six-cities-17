import { useState } from 'react';
import { OfferInterface } from '../../mocks/offers';
import OneCardItem from '../offers/oneCardItem';
import TextForOffers from '../offers/withTextForOffers';

type NeighbourhoodPlacesPropsType = {
  offers: OfferInterface[];
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
  );
}

export default NeighbourhoodPlaces;
