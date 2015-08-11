import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles/Header.scss';
let styles = require('./styles/Header.scss').locals.styles;

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={ `${ styles }`} >
        Redux easy boilerplate
      </div>
    );
  }
}
