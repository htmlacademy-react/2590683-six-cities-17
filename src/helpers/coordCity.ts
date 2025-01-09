import { CitiesСoord, CityType } from '../consts';

export function getCityCoord(city: CityType) {
  return CitiesСoord[city];
}
