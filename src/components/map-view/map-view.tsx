import { useEffect, useRef } from 'react';
import { OfferInterface } from '../../mocks/offers';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';

type MapPropsType = {
  cityInfomation: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  points: OfferInterface[] | null;
  selectedPlace?: string | null;
  type: 'offer' | 'cities';
};

function MapView({
  cityInfomation,
  points,
  selectedPlace,
  type,
}: MapPropsType) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityInfomation);

  const defaultCustomIcon = leaflet.icon({
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],

    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location?.latitude,
              lng: point.location?.longitude,
            },
            {
              icon:
                point.id === selectedPlace
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPlace]);

  return (
    <section
      ref={mapRef}
      className={`map ${
        type === 'offer' ? 'offer__map' : type === 'cities' ? 'cities__map' : ''
      }`}
    />
  );
}

export default MapView;
