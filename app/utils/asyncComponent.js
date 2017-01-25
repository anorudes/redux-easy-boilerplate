import { showSpinnerAsyncPage } from '../redux/modules/app/app';
import store from 'redux/store';

export default function asyncComponent() {
  __CLIENT__ && store.dispatch(showSpinnerAsyncPage());
}
