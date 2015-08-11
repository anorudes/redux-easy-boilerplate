import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './styles.js';

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
