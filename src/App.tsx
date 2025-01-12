import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/main-page';
import { LoginPage } from './pages/login/login-page';
import FavoritesPage from './pages/favorites/favorites-page';
import OfferPage from './pages/offer/offer-page';
import PrivateRoute from './components/private-route/private-route';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  // const places = useAppSelector((state) => state.placesInChoosedCity);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="favorites"
          element={<PrivateRoute element={<FavoritesPage />} />}
        />
        <Route path="offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
