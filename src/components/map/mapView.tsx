import { useEffect, useRef } from 'react';
import { OfferInterface } from '../../mocks/offers';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';

type MapPropsType = {
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  points: OfferInterface[];
  selectedPoint?: OfferInterface | undefined;
  type: 'offer' | 'cities';
};

function MapView({ city, points, selectedPoint, type }: MapPropsType) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  // const defaultCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_DEFAULT,
  //   iconSize: [40, 40],

  //   iconAnchor: [20, 40],
  // });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location?.latitude,
              lng: point.location?.longitude,
            }
            // {
            //   icon:
            //     point.title === selectedPoint.title
            //       ? currentCustomIcon
            //       : defaultCustomIcon,
            // }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

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
