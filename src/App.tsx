import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import FavoritesPage from './pages/favorites/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/not-found/not-found-page';
import LoginPage from './pages/login-page/login-page';
import { AppRoute } from './consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute element={<FavoritesPage />} />}
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path={AppRoute.Any} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
