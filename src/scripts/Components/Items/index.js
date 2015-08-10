import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles.scss';
let mainStyles = require('./styles.scss').locals.styles;

import { add, del } from '../../Actions';

class Items extends Component {
  render() {
    const { dispatch, items } = this.props;
    return (
      <div className="Main">
        <hr />
        <For each="item" of={ items }>
          <div>{ item }</div>
        </For>
        <hr />
        <div className={ `${ mainStyles }` }>
          <button className="btn btn-default" onClick={ () => dispatch(add()) }>add</button>
          {' '}
          <button className="btn btn-default" onClick={ () => dispatch(del()) }>delete</button>
        </div>
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