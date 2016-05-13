import { createReducer } from '../../utils/createReducer';

// Spinner hidden by default
const initialState = {
  spinnerAsyncPage: false,
  // see /app/components/Root/ /app/components/Pages/Posts/ and /app/server/server-ssr.js
  appMounted: false,
};

// For async components
export default createReducer({
  ['APP_MOUNT']: state => ({ //
    ...state,
    appMounted: true,
  }),

  ['SHOW_SPINNER_ASYNC_PAGE']: state => ({ // show spinner when async component began to load from server
    ...state,
    spinnerAsyncPage: true,
  }),

  ['HIDE_SPINNER_ASYNC_PAGE']: state => ({ // hide spinner after loading component from server
    ...state,
    spinnerAsyncPage: false,
  }),
}, initialState);

export const showSpinnerAsyncPage = () => ({
  type: 'SHOW_SPINNER_ASYNC_PAGE',
});

export const hideSpinnerAsyncPage = () => ({
  type: 'HIDE_SPINNER_ASYNC_PAGE',
});

export const appMount = () => ({
  type: 'APP_MOUNT',
});
