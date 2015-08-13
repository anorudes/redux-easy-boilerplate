import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

export default class <%= name %> extends Component {
  render() {
    return (
      <div className={ styles } >
        <h2>
          <%= name %>
        </h2>
      </div>
    );
  }
}
