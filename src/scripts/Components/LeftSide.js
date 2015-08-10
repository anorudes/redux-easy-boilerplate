import React, { Component } from 'react';

// Vendor styles
import 'bootstrap-webpack';

// Component styles
import 'style!./Styles/LeftSide.scss';
let styles = require('./Styles/LeftSide.scss').locals.styles;

// Components
import Weeks from './Weeks.js';
import Shops from './Shops.js';

export default class LeftSide extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
        <Weeks />
        <Shops />
      </div>
    );
  }
}
