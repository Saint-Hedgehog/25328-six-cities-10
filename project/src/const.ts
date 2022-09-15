export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum PageCardClass {
  Main = 'cities',
  Property = 'near-places',
  Favorite = 'favorites',
}

export enum PageClass {
  Property = 'property',
  OfferCard = 'place-card',
  Reviews = 'reviews'
}

export enum ImagePropertyCount {
  Start = 0,
  End = 6,
}

export const ImageSize = {
  Big: {
    height: 200,
    width: 260,
  },
  Small: {
    height: 110,
    width: 150,
  }
} as const;

export const ButtonSize = {
  Big: {
    height: 33,
    width: 31,
  },
  Small: {
    height: 19,
    width: 18,
  }
} as const;

export const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'] as const;

export const inputRatingOption = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' },
] as const;

export const UrlMarker = {
  Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
} as const;

export const IconParameter = {
  Size: {
    x: 40,
    y: 40
  },
  Anchor: {
    x: 20,
    y: 40
  }
} as const;
