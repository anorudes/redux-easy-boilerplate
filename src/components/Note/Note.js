import React, { Component } from 'react';

// Component styles
import styles from './Note.styles.js';

export default class Note extends Component {
  render() {
    return (
      <div className={ styles } >
        <h2>
          Note
        </h2>
      </div>
    );
  }
}
