import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event) {
    const index = event.currentTarget.dataset.index;
    this.actions.delItem(index);
  }

  render() {
    const { items } = this.props;

    return (
      <div className={styles}>
        {!items.length ? <span>Array is empty</span> : null}
        {
          items.map((item, index) =>
            <div className="checkbox" key={index}>
              <label>
                <input type="checkbox"
                       defaultChecked={item.done} />
                {`${item.text}`}
                <span className="remove"
                      data-index={index}
                      onClick={this.onDelete}>
                      x
                </span>
              </label>
            </div>
          )
        }
        </div>
    );
  }
}
