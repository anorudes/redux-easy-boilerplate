import React, { Component } from 'react';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/main.scss';

import Items from './components/Items.js';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Items />
      </div>
    )
  }
};
