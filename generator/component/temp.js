import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import * as actionCreators from 'actions/<%= name %>';

@connect(state => state.<%= name %>)
export default class <%= name %> extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }
  
  render() {
    const { data } = this.props;

    return (
      <div className={styles}>
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
