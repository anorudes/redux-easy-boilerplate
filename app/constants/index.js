const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

// set location dist folder and api url for 4 differents run modes

let devUrl;

if (__CLIENT__ && !__PRODUCTION__) {
  devUrl = 'http://localhost:3000/dist/';
}

if (!__CLIENT__ && !__PRODUCTION__) {
  devUrl = 'http://localhost:3001/dist/';
}

if (__PRODUCTION__) {
  devUrl = '/dist/';
}

export const DEV_URL = devUrl;

export const API_URL = __PRODUCTION__
  ? '/api/'
  : 'http://localhost:3000/api/';
