import { Link } from 'react-router-dom';
import { AppRoute, Cities } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/offers-data/offers-data';

export default function LoginLocationsItem() {
  const dispatch = useAppDispatch();
  const citiesArray = Object.values(Cities);
  const randomCity =
    citiesArray[Math.floor(Math.random() * citiesArray.length)];

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          to={AppRoute.Root}
          onClick={() => dispatch(setCurrentCity(randomCity))}
        >
          <div className="locations__item-link">
            <span>{randomCity}</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
