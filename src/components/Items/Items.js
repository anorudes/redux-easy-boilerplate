import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './Items.styles.js';

// Actions
import { add, del } from '../../actions';

export default class Items extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    items: React.PropTypes.string,
  };

  render() {
    const { dispatch, items } = this.props;
    const _addClick = () => {
      this.props.dispatch(add(React.findDOMNode(this.refs.text).value));
      React.findDOMNode(this.refs.text).value = '';
    };
    return (
      <div className={ styles } >
        <h3>
          Redux test
        </h3>
        <If condition={ !items.length }>
          <span>Array is empty</span>
        </If>
        <For each="item, index" of={ items }>
          <div key={ index }>{ item.numb }) { item.text }</div>
        </For>
        <hr />
        <div className="form-group">
          <input type="text"
            className="form-control"
            ref="text"
            placeholder="Enter something" />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={ () => _addClick() }>add</button>
          {' '}
          <button className="btn btn-default" onClick={ () => dispatch(del()) }>delete</button>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    items: state.items,
  };
}

export default connect(select)(Items);
