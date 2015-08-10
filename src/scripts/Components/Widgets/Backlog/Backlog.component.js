import React, { Component } from 'react';

// Component styles
import 'style!./Backlog.scss';
let styles = require('./Backlog.scss').locals.styles;

export default class Backlog extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>

      </div>
    );
  }
}
