import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import { example } from 'actions';

@connect(state => state.<%= name %>)
export default class <%= name %> extends Component {
  render() {
    const { dispatch, data } = this.props;
    
    return (
      <div className={styles} >
        <h2>
          <%= name %>
        </h2>
        <p>
          Data: {data}
        </p>
      </div>
    );
  }
}
