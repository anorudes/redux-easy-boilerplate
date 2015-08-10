import React, { Component } from 'react';

import Dashboard from '../../Dashboard.render.js';

// Component styles
import 'style!./Performance.scss';
let styles = require('./Performance.scss').locals.styles;

export default class Performance extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>
        <div className='widget lineChart'
          id='Performance' />
      </div>
    );
  }
}
