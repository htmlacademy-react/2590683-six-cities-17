import { useState } from 'react';
import { OfferInterface } from '../../mocks/offers';
import OneCardMainPage from './oneCardMainPage';
import { Link } from 'react-router-dom';

type OffersListMainPagePropsType = {
  offers: OfferInterface[];
};

const OffersListMainPage = ({ offers }: OffersListMainPagePropsType) => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers &&
        offers.map((offer) => (
          <Link key={offer.id} to={`/offer/${activeOfferId}`}>
            <OneCardMainPage
              card={offer}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </Link>
        ))}
    </div>
  );
};
export default OffersListMainPage;
