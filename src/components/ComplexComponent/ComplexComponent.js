import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './ComplexComponent.styles.js';

// Actions
import { example } from '../../actions';

// To export component add line to the ./src/components/index.js:
// export { default as ComplexComponent } from './ComplexComponent/ComplexComponent.js';
//
// And to import component ./src/Main.js
// import { ComplexComponent } from './components/';
//
// Actions
// Add line to the ./src/actions/index.js:
// export { ComplexComponent } from './ComplexComponent.js';
//
// Reducers
// Add line:
// export { ComplexComponent } from './ComplexComponent.js';

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
