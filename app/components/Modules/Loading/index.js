// Simple loading component (for async pages)

import React from 'react';

/* component styles */
require('./styles.scss');

const Loading = () => (
  <img className="component-loading" src="/static/images/loading.gif" />
);

export default Loading;
