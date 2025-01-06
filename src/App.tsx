import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/mainPage';
import { CardType } from './types/CardType';
import { LoginPage } from './pages/Login/LoginPage';
import FavoritesPage from './pages/Favorites/FavoritesPege';
import OfferPage from './pages/Offer/offerPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import PrivateRoute from './components/Private-Route/PrivateRoute';

type AppProps = {
  cards: CardType[];
};

function App({ cards }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage cards={cards} />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route
            path="favorites"
            element={<PrivateRoute element={<FavoritesPage />} />}
          />
          <Route path="offer" element={<OfferPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
