import { useState } from 'react';
import Header from '../../components/header/header';
import { Locations } from '../../components/locations/locations';
import OffersListMainPage from '../../components/offers/offersListMainPage';
import { OfferInterface } from '../../mocks/offers';
import { getCityCoord } from '../../helpers/coordCity';
import { CityType } from '../../consts';
import MapView from '../../components/map/mapView';

type MainPageProps = {
  cards: OfferInterface[];
};

export default function MainPage({ cards }: MainPageProps) {
  const [activeCity, setIsActiveCity] = useState<CityType>('Amsterdam');

  const changeCityHandler = (city: CityType) => {
    setIsActiveCity(city);
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
            <OffersListMainPage offers={cards} activeCity={activeCity} />
            <div className="cities__right-section">
              <MapView
                city={getCityCoord(activeCity)}
                points={cards}
                type={'cities'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
