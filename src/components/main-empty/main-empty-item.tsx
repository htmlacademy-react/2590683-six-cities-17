import {
  CITIES_STATUS_EMPTY,
  CITIES_STATUS_EMPTY_DESCRIPTION,
  Cities,
} from '../../consts';

export default function MainEmptyItem({ city }: { city: Cities }) {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">{CITIES_STATUS_EMPTY}</b>
          <p className="cities__status-description">
            {CITIES_STATUS_EMPTY_DESCRIPTION} {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
