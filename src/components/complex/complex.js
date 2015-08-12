import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './complex.styles.js';

// Actions
// import { add, del } from '../../actions';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as complex } from './complex/complex.js';
//
// And to import component ./src/Main.js
// import { complex } from './components/';

export default class complex extends Component {
  render() {
    const { dispatch, items } = this.props;
    return (
      <div className={ styles } >
        Comonent
      </div>
    );
  }
}


let select = (state) => {
  return {
    items: state.items
  };
}

export default connect(select)(Items);
