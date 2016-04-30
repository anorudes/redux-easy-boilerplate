import { showSpinnerAsyncPage } from '../redux/modules/app/app';
import { store } from '../';

export const asyncComponent = () => {
  __CLIENT__ && store.dispatch(showSpinnerAsyncPage());
};
