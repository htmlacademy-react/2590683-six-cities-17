import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import { LoginPage } from './pages/login/loginPage';
import FavoritesPage from './pages/favorites/favoritesPage';
import OfferPage from './pages/offer/offerPage';
import NotFoundPage from './pages/notFound/notFoundPage';
import PrivateRoute from './components/private-Route/privateRoute';
import { OfferInterface, mockOffers } from './mocks/offers';
import { reviewsArray } from './mocks/reviews';

type AppProps = {
  cards: OfferInterface[];
};

function App({ cards }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage cards={cards} />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute element={<FavoritesPage offers={mockOffers} />} />
          }
        />
        <Route
          path="offer/:id"
          element={
            <OfferPage mockDetailedOffers={mockOffers} reviews={reviewsArray} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
