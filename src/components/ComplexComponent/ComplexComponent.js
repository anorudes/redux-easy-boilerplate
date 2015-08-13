import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './ComplexComponent.styles.js';

// Actions
import { example } from '../../actions';

export default class ComplexComponent extends Component {
  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        <h2>
          ComplexComponent
        </h2>
        <p>
          Data: { data }
        </p>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.ComplexComponent,
  };
}

export default connect(select)(ComplexComponent);
