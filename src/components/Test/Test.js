import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './Test.styles.js';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as Test } from './Test/Test.js';
//
// And to import component ./src/Main.js
// import { Test } from './components/';

export default class Test extends Component {
  render() {
    return (
      <div className={ styles } >
        Comonent
      </div>
    );
  }
}
