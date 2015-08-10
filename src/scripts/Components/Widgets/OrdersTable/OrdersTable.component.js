import React, { Component } from 'react';

// Component styles
import 'style!./OrdersTable.scss';
let styles = require('./OrdersTable.scss').locals.styles;

export default class OrdersTable extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>
        <div className='widget dataTable' id='Orders'></div>
      </div>
    );
  }
}
