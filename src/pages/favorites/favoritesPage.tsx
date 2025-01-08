import Header from '../../components/header/header';
import OffersList from '../../components/offers/offersListFavorites';
import Footer from '../../footer/footer';
import { OfferInterface } from '../../mocks/offers';

type FavoritesPagePropsType = {
  offers: OfferInterface[];
};

export default function FavoritesPage({ offers }: FavoritesPagePropsType) {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <OffersList offers={favoritesOffers}></OffersList>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
