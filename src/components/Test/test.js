import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './Test.styles.js';

// Actions
import { example } from '../../actions';

// To export component add line to the ./src/components/index.js:
// export { default as Test } from './Test/Test.js';
//
// And to import component ./src/Main.js
// import { Test } from './components/';
//
// Actions
// Add line to the ./src/actions/index.js:
// export { Test } from './Test.js';
//
// Reducers
// Add line:
// export { Test } from './Test.js';

export default class Test extends Component {
  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        <h2>
          Other component:
        </h2>
        <p>
          Data: { data.text }
        </p>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.test,
  };
}

export default connect(select)(Test);
