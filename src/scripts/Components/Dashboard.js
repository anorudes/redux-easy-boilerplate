import React, { Component } from 'react';

// Vendor styles
import 'bootstrap-webpack';

// Component styles
import 'style!./Styles/Dashboard.scss';
let dashboardStyles = require('./Styles/Dashboard.scss').locals.styles;

// Components
import Header from './Header.js';
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

export default class ApplicationMenu extends Component {
  render() {
    return (
      <div className={ `${ dashboardStyles }` }>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-lg-2">
              <LeftSide />
            </div>
            <div className="col-md-10 col-lg-10">
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
