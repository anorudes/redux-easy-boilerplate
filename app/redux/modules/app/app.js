import { createReducer } from '../../utils/createReducer';

// Spinner hidden by default
const initialState = {
  spinnerAsyncPage: false,
};

// For async components
export default createReducer({
  ['SHOW_SPINNER_ASYNC_PAGE']: state => ({ // show spinner when async component began to load from server
    spinnerAsyncPage: true
  }),

  ['HIDE_SPINNER_ASYNC_PAGE']: state => ({ // hide spinner after loading component from server
    spinnerAsyncPage: false
  }),
}, initialState);

export const showSpinnerAsyncPage = () => ({
  type: 'SHOW_SPINNER_ASYNC_PAGE',
});

export const hideSpinnerAsyncPage = () => ({
  type: 'HIDE_SPINNER_ASYNC_PAGE',
});
