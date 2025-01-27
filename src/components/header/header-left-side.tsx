import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/offers-data/offers-data';
import { Cities } from '../../consts';

export default function HeaderLeftSide() {
  const dispatch = useAppDispatch();
  return (
    <div className="header__left">
      <Link to="/" onClick={() => dispatch(setCurrentCity(Cities.Paris))}>
        <div className="header__logo-link header__logo-link--active">
          <img
            className="header__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="81"
            height="41"
          />
        </div>
      </Link>
    </div>
  );
}
