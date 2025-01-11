import { OfferInterface } from '../mocks/offers';

export function getCityInfomation(city: OfferInterface) {
  return {
    title: city.city.name,
    lat: city.city.location.latitude,
    lng: city.city.location.longitude,
    zoom: city.city.location.zoom,
  };
}
