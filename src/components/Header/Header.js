import React, { Component } from 'react';

/* component styles */
import styles from './styles.js';

export default class Header extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
        Redux easy boilerplate
      </div>
    );
  }
}
