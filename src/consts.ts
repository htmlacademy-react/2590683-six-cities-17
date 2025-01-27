export const TIMEOUT_SHOW_ERROR = 2000;
export const MAIN_EMPTY_TEXT =
  'We could not find any property available at the moment in';
export const FAVORITES__TITLE = 'Saved listing';
export const NEAR_PLACES_TITLE = 'Other places in the neighbourhood';
export const REVIEWS__TITLE = `Reviews`;
export const PLACE_FOUND_TITLE = 'place to stay in';
export const PLACES_FOUND_TITLE = 'places to stay in';

// export const
// export const
// export const
// export const
// export const

export const OFFER__HOST_TITLE = 'Meet the host';

export enum LoginInputNames {
  EMail = 'E-mail',
  Password = 'Password',
}

export enum StatusForAuthAction {
  SignOut = 'Sign out',
  SignIn = 'Sign in',
}

export enum FilterList {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/six-cities/offers',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout',
  Favorite = '/six-cities/favorite',
  Comments = '/six-cities/comments',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
  Combined = 'COMBINED',
}

export enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  Root = '/',
  Any = '/*',
}
