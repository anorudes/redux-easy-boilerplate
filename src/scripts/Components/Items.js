import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./Styles/items.scss';
let mainStyles = require('./Styles/items.scss').locals.styles;

import { Add } from '../Actions/Actions.js';

class Items extends Component {
  render() {
    const { dispatch, items } = this.props;
    return (
      <div className="Main">
        <For each="item" of={ items }>
          <div>{ item }</div>
        </For>
        <hr />
        <div className={ `${ mainStyles }` }>
          <button className="btn btn-default" onClick={ () => dispatch(Add()) }>add</button>
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

export default connect(select)(Items);