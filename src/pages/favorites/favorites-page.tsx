import Header from '../../components/header/header';
import OffersList from '../../components/offers/offers-list-favorites';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

export default function FavoritesPage() {
  const offers = useAppSelector((state) => state.placesAllData);

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
