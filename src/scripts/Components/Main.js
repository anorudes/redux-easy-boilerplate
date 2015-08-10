import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./Styles/Main.scss';
let mainStyles = require('./Styles/Main.scss').locals.styles;

import { Add } from '../Actions/Actions.js';

class Main extends Component {
  render() {
    const { dispatch, items } = this.props;
    return (
      <div className="Main">
        <For each="item" of={ items }>
          <div>{ item }</div>
        </For>
        <hr />
        <div className={ `${ mainStyles }` }>
          <button onClick={ () => dispatch(Add()) }>add</button>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    items: state.items
  };
}

export default connect(select)(Main);