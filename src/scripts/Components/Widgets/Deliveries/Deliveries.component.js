import React, { Component } from 'react';

// Component styles
import 'style!./Deliveries.scss';
let styles = require('./Deliveries.scss').locals.styles;

export default class Deliveries extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>

      </div>
    );
  }
}
