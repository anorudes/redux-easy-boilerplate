import React, { Component, PropTypes } from 'react';
import DashboardApp from '../Components/Dashboard';

// Component styles
import 'style!./../Components/Styles/Application.scss';
let applicationStyles = require('./../Components/Styles/Application.scss').locals.styles;

export default class App extends Component {
  render() {  
    return (
      <div className = { `${ applicationStyles }` }>
        <DashboardApp />
      </div>
    );
  }
}
