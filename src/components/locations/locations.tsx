import { Cities, CityType } from '../../consts';

type LocationsPropsType = {
  activeCity: CityType;
  changeCityHandler: (city: CityType) => void;
};

export const Locations = ({
  activeCity,
  changeCityHandler,
}: LocationsPropsType) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities &&
          Cities.map((city) => (
            <li className="locations__item" key={city}>
              <div
                className={`locations__item-link tabs__item 
                ${activeCity === city && 'tabs__item--active'}
                `}
              >
                <span onClick={() => changeCityHandler(city)}>{city}</span>
              </div>
            </li>
          ))}
      </ul>
    </section>
  </div>
);
