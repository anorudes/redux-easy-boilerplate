import React, { Component } from 'react';

// Component styles
import 'style!./Gross.scss';
let styles = require('./Gross.scss').locals.styles;

export default class Gross extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>

      </div>
    );
  }
}
