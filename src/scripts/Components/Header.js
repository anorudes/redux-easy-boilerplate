import React, { Component } from 'react';

// Component styles
import 'style!./Styles/Header.scss';
let styles = require('./Styles/Header.scss').locals.styles;

export default class Header extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
        Sales Dashboard
      </div>
    );
  }
}
