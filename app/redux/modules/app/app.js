import { createReducer } from '../../utils/createReducer';

const initialState = {
  spinnerAsyncPage: false,
};

export default createReducer({
  ['SHOW_SPINNER_ASYNC_PAGE']: state =>
    state.set('spinnerAsyncPage', true),
  ['HIDE_SPINNER_ASYNC_PAGE']: state =>
    state.set('spinnerAsyncPage', false),
}, initialState);

export const showSpinnerAsyncPage = () => ({
  type: 'SHOW_SPINNER_ASYNC_PAGE',
});

export const hideSpinnerAsyncPage = () => ({
  type: 'HIDE_SPINNER_ASYNC_PAGE',
});
