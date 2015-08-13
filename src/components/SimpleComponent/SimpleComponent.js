import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './SimpleComponent.styles.js';

export default class SimpleComponent extends Component {
  render() {
    return (
      <div className={ styles } >
        <h2>
          SimpleComponent
        </h2>
      </div>
    );
  }
}
