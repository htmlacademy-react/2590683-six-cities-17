import { CitiesСoord, CityNameType } from '../consts';

export function getCityCoord(city: CityNameType) {
  return CitiesСoord[city];
}
