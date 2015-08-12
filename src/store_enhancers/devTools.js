import React from 'react';
import { createStore as initialCreateStore, compose } from 'redux';

export let createStore = initialCreateStore;

createStore = compose(
  require('redux-devtools').devTools(),
  require('redux-devtools').persistState(
    window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  ),
  createStore
);

export function renderDevTools(store) {
  let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react');
  return (
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  );
  return null;
}
