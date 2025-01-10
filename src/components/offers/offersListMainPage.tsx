import { useState } from 'react';
import { OfferInterface } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import OneCardItem from './oneCardItem';
import MainPageSort from '../sort/mainPageSort';
import TextForOffers from './withTextForOffers';

type OffersListMainPagePropsType = {
  offers: OfferInterface[];
  activeCity?: string;
};

export default function OffersListMainPage({
  offers,
  activeCity,
}: OffersListMainPagePropsType) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setActiveOfferId(id);
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null);
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
        {offers &&
          offers.map((offer) => (
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
