import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* component styles */
import styles from './styles';

/* actions */
import * as actionCreators from 'actions/items';

@connect(state => state.items)
export class Items extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  onAddClick() {
    if (this.refs.text.value) {
      this.actions.add(this.refs.text.value);
      this.refs.text.value = '';
    }
  }

  onDeleteClick() {
    this.actions.del();
  }

  render() {
    const { items } = this.props;

    return (
      <div className={styles}>
        <h3>
          Redux test
        </h3>
        {!items.length ? <span>Array is empty</span> : null}
        {items.map((item, index) => <div key={index}>
            {item.numb}) {item.text}
        </div>)}
        <hr />
        <div className="form-group">
          <input type="text"
            className="form-control"
            ref="text"
            placeholder="Enter something" />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={() => this.onAddClick()}>add</button>
          {' '}
          <button className="btn btn-default" onClick={() => this.onDeleteClick()}>delete</button>
        </div>
      </div>
    );
  }
}
