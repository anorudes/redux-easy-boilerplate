import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './SimpleComponent.styles.js';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as SimpleComponent } from './SimpleComponent/SimpleComponent.js';
//
// And to import component ./src/Main.js
// import { SimpleComponent } from './components/';

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
