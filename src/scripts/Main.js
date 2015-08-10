import React, { Component } from 'react';

import 'bootstrap-webpack';

import Items from './components/Items';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Items />
      </div>
    )
  }
};
