import { useState } from 'react';
import Header from '../../components/header/header';
import { Locations } from '../../components/locations/locations';
import OffersListMainPage from '../../components/offers/offersListMainPage';
import MainPageSort from '../../components/sort/mainPageSort';
import { OfferInterface } from '../../mocks/offers';
import Map from '../../components/map/map';
import { getCityCoord } from '../../helpers/coordCity';
import { CityType } from '../../consts';

type MainPageProps = {
  cards: OfferInterface[];
};

export default function MainPage({ cards }: MainPageProps) {
  const [activeCity, setIsActiveCity] = useState<CityType>('Amsterdam');
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [filterNow, setFilterNow] = useState('Popular');

  const changeCityHandler = (city: CityType) => {
    setIsActiveCity(city);
  };

  const changeFilterNow = (item: string) => {
    setFilterNow(item);
    setIsOpenSort(!isOpenSort);
  };
  const openHandleSort = () => {
    setIsOpenSort(!isOpenSort);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations
          activeCity={activeCity}
          changeCityHandler={changeCityHandler}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cards.length} places to stay in {activeCity}
              </b>
              <MainPageSort
                openHandleSort={openHandleSort}
                changeFilterNow={changeFilterNow}
                filterNow={filterNow}
                isOpenSort={isOpenSort}
              />
              <OffersListMainPage offers={cards} />
            </section>
            <Map city={getCityCoord(activeCity)} points={cards} />
          </div>
        </div>
      </main>
    </div>
  );
}
