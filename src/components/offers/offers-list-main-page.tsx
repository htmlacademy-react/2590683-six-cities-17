import { useState } from 'react';
import MainPageSort from '../main-page-sort/main-page-sort';
import TextForOffers from './with-text-for-offers';
import { sortPlaces } from '../../helpers/sort-places';
import OneOfferItem from './one-offer-item';
import { OfferInterface } from '../../types/places-type';
import {
  Cities,
  FilterList,
  PLACES_FOUND_TITLE,
  PLACE_FOUND_TITLE,
} from '../../consts';

type OffersListMainPagePropsType = {
  offers: OfferInterface[];
  activeCity: Cities;
  setActivePlace: (title: string | null) => void;
};

export default function OffersListMainPage({
  offers,
  activeCity,
  setActivePlace,
}: OffersListMainPagePropsType) {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [filterNow, setFilterNow] = useState(FilterList.Popular);

  const handleMouseEnter = (id: string) => {
    setActivePlace?.(id);
  };

  const handleMouseLeave = () => {
    setActivePlace(null);
  };

  const changeFilterNow = (item: FilterList) => {
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
        {`${offers.length} ${
          offers.length === 1 ? PLACE_FOUND_TITLE : PLACES_FOUND_TITLE
        } ${activeCity}`}
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
            <OneOfferItem
              key={offer.id}
              offer={offer}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              className="place-card"
            />
          ))}
      </div>
    </TextForOffers>
  );
}
