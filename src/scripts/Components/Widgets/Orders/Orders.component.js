import React, { Component } from 'react';

// Component styles
import 'style!./Orders.scss';
let styles = require('./Orders.scss').locals.styles;

export default class Orders extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>
      </div>
    );
  }
}
