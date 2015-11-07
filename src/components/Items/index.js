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
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick() {
    if (this.refs.text.value) {
      this.actions.addItem(this.refs.text.value);
      this.refs.text.value = '';
    }
  }

  onDeleteClick() {
    this.actions.delItem();
  }

  render() {
    const { items } = this.props;

    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Redux
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h2>
                Boilerplate contains:
              </h2>

              {!items.length ? <span>Array is empty</span> : null}
              {
                items.map((item, index) =>
                  <div className="checkbox" key={index}>
                    <label>
                      <input type="checkbox"
                             defaultChecked={item.done} />
                      {`${item.text}`}
                      <span className="remove"
                            onClick={this.onDeleteClick}>
                            x
                      </span>
                    </label>
                  </div>
                )
              }
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  ref="text"
                  placeholder="Enter something" />
              </div>
              <div className="form-group">
                <button className="btn btn-default" onClick={this.onAddClick}>
                  Add to store
                </button>
                <button className="btn btn-default" onClick={this.onDeleteClick}>
                  Remove from store
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
