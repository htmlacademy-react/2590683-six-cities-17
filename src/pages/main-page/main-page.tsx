import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { Locations } from '../../components/locations/locations';
import OffersListMainPage from '../../components/offers/offers-list-main-page';
import { getCityInfomation } from '../../helpers/coord-city';
import MapView from '../../components/map-view/map-view';
import { useAppDispatch, useAppSelector } from '../../hooks';
import MainEmptyItem from '../../components/main-empty/main-empty-item';
import { AuthorizationStatus, Cities } from '../../consts';
import {
  fetchFavoriteOffersAction,
  fetchOffersAction,
} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { setCurrentCity } from '../../store/combined-data/combined-data';

export default function MainPage() {
  const [activePlace, setActivePlace] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector(
    (state) => state.COMBINED.offersDataLoadingStatus
  );
  const isOffersFavoritesLoading = useAppSelector(
    (state) => state.COMBINED.favoriteOffersDataLoadingStatus
  );
  const allPlaces = useAppSelector((state) => state.COMBINED.offers);
  const isAuth = useAppSelector((state) => state.USER.authorizationStatus);
  const activeCity = useAppSelector((state) => state.COMBINED.currentCity);
  const favoritesOffers = useAppSelector((state) => state.COMBINED.favorites);

  const placesInChoosedCity =
    allPlaces &&
    allPlaces.filter((place) => {
      return place.city.name === activeCity;
    });

  const changeCityHandler = (city: Cities) => {
    dispatch(setCurrentCity(city));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (allPlaces === null) {
        await dispatch(fetchOffersAction());
      }
      if (favoritesOffers === null && isAuth === AuthorizationStatus.Auth) {
        await dispatch(fetchFavoriteOffersAction());
      }
    };
    fetchData();
  }, [dispatch, allPlaces, favoritesOffers]);

  if (isOffersLoading || isOffersFavoritesLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main ">
      <Header />
      <main
        className={`page__main page__main--index ${
          placesInChoosedCity === null ||
          (placesInChoosedCity.length === 0 && 'page__main--index-empty')
        }
       `}
      >
        <h1 className="visually-hidden">Cities</h1>
        <Locations
          activeCity={activeCity}
          changeCityHandler={changeCityHandler}
        />
        <div className="cities">
          {placesInChoosedCity && placesInChoosedCity.length !== 0 ? (
            <div className="cities__places-container container">
              <OffersListMainPage
                offers={placesInChoosedCity}
                activeCity={activeCity}
                setActivePlace={setActivePlace}
              />
              <div className="cities__right-section">
                <MapView
                  cityInfomation={getCityInfomation(placesInChoosedCity[0])}
                  points={placesInChoosedCity}
                  selectedPlace={activePlace}
                  type={'cities'}
                />
              </div>
            </div>
          ) : (
            <MainEmptyItem city={activeCity} />
          )}
        </div>
      </main>
    </div>
  );
}
