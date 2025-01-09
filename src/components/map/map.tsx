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
};

function Map({ city, points, selectedPoint }: MapPropsType) {
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
    <div className="cities__right-section">
      <section ref={mapRef} className="map cities__map"></section>
    </div>
  );
}

export default Map;
