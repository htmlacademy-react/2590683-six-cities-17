import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import { OfferInterface } from '../../types/places-type';
import pin from '../../../markup/img/pin.svg';
import pinActiv from '../../../markup/img/pin-active.svg';

type MapPropsType = {
  cityInfomation: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  points: OfferInterface[];
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
    iconUrl: pin,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: pinActiv,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    const markers: leaflet.Marker[] = [];

    if (map && points) {
      markers.forEach((marker) => marker.remove());

      points.forEach((point, index) => {
        const isHighlighted =
          point.id === selectedPlace || (type === 'offer' && index === 0);

        const marker = leaflet
          .marker(
            {
              lat: point.location?.latitude,
              lng: point.location?.longitude,
            },
            {
              icon: isHighlighted ? currentCustomIcon : defaultCustomIcon,
            }
          )
          .addTo(map);

        markers.push(marker);
      });
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [map, points, selectedPlace, type]);

  return <section ref={mapRef} className={`map ${type && `${type}__map`}`} />;
}

export default MapView;
