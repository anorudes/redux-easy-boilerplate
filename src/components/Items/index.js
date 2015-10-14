import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* component styles */
import styles from './styles';

/* actions */
import * as actionCreators from 'actions/items';

@connect(state => state.items)
export default class Items extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    items: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
  }

  renderItem(item, index) {
    return <div key={index}>{item.numb}) {item.text}</div>;
  }

  render() {
    const { items } = this.props;
    const _addClick = () => {
      this.actions.add(this.refs.text.value);
      this.refs.text.value = '';
    };

    return (
      <div className={styles}>
        <h3>
          Redux test
        </h3>
        {! items.length ? <span>Array is empty</span> : null}

        {items.map(this.renderItem)}
        <hr />
        <div className="form-group">
          <input type="text"
            className="form-control"
            ref="text"
            placeholder="Enter something" />
        </div>
        <div className="form-group">
          <button className="btn btn-default" onClick={() => _addClick()}>add</button>
          {' '}
          <button className="btn btn-default" onClick={() => this.actions.del()}>delete</button>
        </div>
      </div>
    );
  }
}
