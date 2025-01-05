import { Cities } from '../consts';

interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}
export interface CardType {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  previewImage: string;
  city: {
    location: Location;
    name: (typeof Cities)[number];
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
