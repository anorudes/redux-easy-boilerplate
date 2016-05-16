import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { defaultState } from 'test/constants';
import { store } from '../../';

export const mountWithStore = Component => mount(
  <Provider store={store}>
    {React.cloneElement(Component, defaultState)}
  </Provider>
);
