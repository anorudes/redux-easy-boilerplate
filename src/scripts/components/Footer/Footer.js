import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles/Footer.scss';
let styles = require('./styles/Footer.scss').locals.styles;

export default class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={ `${ styles }`} >
        <a href='https://github.com/anorudes/redux-easy-boilerplate'>GitHub</a>
      </div>
    );
  }
}
