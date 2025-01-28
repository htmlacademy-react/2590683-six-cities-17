import Header from '../../components/header/header';
import OffersList from '../../components/offers/offers-list-favorites';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { AuthorizationStatus, FAVORITES__TITLE } from '../../consts';

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector((state) => state.COMBINED.favorites);
  const isAuth = useAppSelector((state) => state.USER.authorizationStatus);

  useEffect(() => {
    if (favoritesOffers === null && isAuth === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, favoritesOffers, isAuth]);

  if (favoritesOffers !== null && favoritesOffers.length === 0) {
    return (
      <div className="page page--favorites-empty">
        <Header />
        <FavoritesEmpty />
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{FAVORITES__TITLE}</h1>
            <ul className="favorites__list">
              {favoritesOffers && <OffersList offers={favoritesOffers} />}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
