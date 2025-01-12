import { useState } from 'react';
import { OfferInterface } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import OneCardItem from './one-card-item';
import MainPageSort from '../sort/main-page-sort';
import TextForOffers from './with-text-for-offers';
import { sortPlaces } from '../../helpers/sort-places';

type OffersListMainPagePropsType = {
  offers: OfferInterface[];
  activeCity: string | null;
  setActivePlace: (title: string | null) => void;
};

export default function OffersListMainPage({
  offers,
  activeCity,
  setActivePlace,
}: OffersListMainPagePropsType) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
    setActivePlace?.(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
    setActivePlace(null);
  };

  const [isOpenSort, setIsOpenSort] = useState(false);
  const [filterNow, setFilterNow] = useState('Popular');
  const changeFilterNow = (item: string) => {
    setFilterNow(item);
    setIsOpenSort(!isOpenSort);
  };
  const openHandleSort = () => {
    setIsOpenSort(!isOpenSort);
  };

  const sortedOffers = sortPlaces(offers, filterNow);

  return (
    <TextForOffers type="mainPage">
      <b className="places__found">
        {offers.length} places to stay in {activeCity}
      </b>
      <MainPageSort
        openHandleSort={openHandleSort}
        changeFilterNow={changeFilterNow}
        filterNow={filterNow}
        isOpenSort={isOpenSort}
      />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers &&
          sortedOffers.map((offer) => (
            <Link key={offer.id} to={`/offer/${activeOfferId}`}>
              <OneCardItem
                card={offer}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                className="cities"
              />
            </Link>
          ))}
      </div>
    </TextForOffers>
  );
}
