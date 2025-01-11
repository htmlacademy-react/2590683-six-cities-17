import { useState } from 'react';
import Header from '../../components/header/header';
import { Locations } from '../../components/locations/locations';
import OffersListMainPage from '../../components/offers/offers-list-main-page';
import { getCityInfomation } from '../../helpers/coord-city';
import { CityNameType } from '../../consts';
import MapView from '../../components/map-view/map-view';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { placesOfChoosedCity } from '../../store/action';

// type MainPageProps = {
//   places: OfferInterface[];
// };

export default function MainPage() {
  const places = useAppSelector((state) => state.placesInChoosedCity);
  const dispatch = useAppDispatch();

  const [activeCity, setIsActiveCity] = useState<CityNameType>('Paris');
  const [activePlace, setActivePlace] = useState<string | null>(null);

  const changeCityHandler = (city: CityNameType) => {
    setIsActiveCity(city);
    dispatch(placesOfChoosedCity(city));
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
            <OffersListMainPage
              offers={places}
              activeCity={activeCity}
              setActivePlace={setActivePlace}
            />
            <div className="cities__right-section">
              <MapView
                cityInfomation={getCityInfomation(places[0])}
                points={places}
                selectedPlace={activePlace}
                type={'cities'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
