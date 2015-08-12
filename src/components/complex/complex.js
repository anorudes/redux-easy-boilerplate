import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './Complex.styles.js';

// Actions
import { getApplicationData } from '../../actions/';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as Complex } from './Complex/Complex.js';
//
// And to import component ./src/Main.js
// import { Complex } from './components/';

export default class Complex extends Component {
  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        Comonent
        Data: { data }
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.application,
  };
}

export default connect(select)(Complex);