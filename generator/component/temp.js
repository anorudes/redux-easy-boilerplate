import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import { example } from '../../actions';

// Note:
//
// To export compontn add line to the ./src/components/index.js:
// export { default as <%= name %> } from './<%= name %>/<%= name %>.js';
//
// And to import component ./src/Main.js
// import { <%= name %> } from './components/';
//
// Actions:
// Add line to the ./src/actions/index.js:
// export { <%= name %> } from './<%= name %>.js';
//
// Reducers:
// Add line:
// export { <%= name %> } from './<%= name %>.js';

export default class <%= name %> extends Component {
  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        Component name: <%= name %>
        Data: { data }
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.<%= name %>,
  };
}

export default connect(select)(<%= name %>);
