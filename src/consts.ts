export const Cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];
export type CityNameType = (typeof Cities)[number];

export const FilterList = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export type CityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

type CitiesType = {
  [key: string]: CityType;
};

export const CitiesСoord: CitiesType = {
  Paris: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  Cologne: {
    title: 'Cologne',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  Brussels: {
    title: 'Brussels',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  Amsterdam: {
    title: 'Amsterdam',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  Hamburg: {
    title: 'Hamburg',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  Dusseldorf: {
    title: 'Dusseldorf',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
};
