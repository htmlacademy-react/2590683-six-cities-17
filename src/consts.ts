export const Cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
export type CityNameType = (typeof Cities)[number];

export const FilterList: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export type CityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};
