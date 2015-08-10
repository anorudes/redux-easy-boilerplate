import React, { Component } from 'react';

// Component styles
import 'style!./Proposals.scss';
let styles = require('./Proposals.scss').locals.styles;

export default class Proposals extends Component {
  render() {
    let { className } = this.props;
    return (
      <div className={ `${ className } ${ styles }` }>
      </div>
    );
  }
}
