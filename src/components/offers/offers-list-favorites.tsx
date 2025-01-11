import { useState } from 'react';
import OneCardFavoritesPage from './oneCardFavotitesPage';
import { OfferInterface } from '../../mocks/offers';

type OffersListPropsType = {
  offers: OfferInterface[];
};

type GroupedOffersType = {
  [cityName: string]: OfferInterface[];
};

function OffersList({ offers }: OffersListPropsType) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };
  const groupedOffers: GroupedOffersType = offers.reduce((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {} as GroupedOffersType);

  return (
    <>
      {Object.keys(groupedOffers).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <div className="locations__item-link">
                <span>{city}</span>
              </div>
            </div>
          </div>
          <div className="favorites__places">
            {groupedOffers[city].map((offer) => (
              <OneCardFavoritesPage
                key={offer.id}
                card={offer}
                activeOfferId={activeOfferId}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </li>
      ))}
    </>
  );
}

export default OffersList;
