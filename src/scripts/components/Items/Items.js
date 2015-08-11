import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import 'style!./styles/Items.scss';
let styles = require('./styles/Items.scss').locals.styles;

// Actions
import { add, del } from '../../actions';

class Items extends Component {
  constructor() {
    super();
  }
  render() {
    const { dispatch, items } = this.props;
    let _addClick = () => {
      this.props.dispatch(add(React.findDOMNode(this.refs.text).value));
      React.findDOMNode(this.refs.text).value = '';
    }
    return (
      <div className={ `${ styles }`} >
        <h3>
          Redux test
        </h3>
        <For each='item' of={ items }>
          <div key={ item }>{ item }</div>
        </For>
        <hr />
        <div className='form-group'>
          <input type='text' 
            className='form-control' 
            ref='text' 
            placeholder='Enter something' />
        </div>
        <div className='form-group'>
          <button className='btn btn-default' onClick={ () => _addClick() }>add</button>
          {' '}
          <button className='btn btn-default' onClick={ () => dispatch(del()) }>delete</button>
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
