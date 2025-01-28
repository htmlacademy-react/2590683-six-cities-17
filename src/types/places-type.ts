export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export interface OfferInterface {
  id: string;
  title: string;
  description?: string;
  type: string;
  price: number;
  previewImage?: string;
  images?: string[];
  city: {
    location: Location;
    name: string;
  };
  location: Location;
  goods?: string[];
  host?: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms?: number;
  maxAdults?: number;
}

export interface DetailedOfferInterface {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  city: {
    location: Location;
    name: string;
  };
  location: Location;
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}
