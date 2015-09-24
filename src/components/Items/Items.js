import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

// Component styles
import styles from './Items.styles.js';

// Actions
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

  render() {
    const { items } = this.props;
    const _addClick = () => {
      this.actions.add(this.refs.text.value);
      this.refs.text.value = '';
    };

    const metaData = {
      title: 'Items Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags',
        },
      },
    };

    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <h3>
          Redux test
        </h3>
        <If condition={ !items.length }>
          <span>Array is empty</span>
        </If>
        <For each="item, index" of={ items }>
          <div key={ index }>{ item.numb }){ item.text }</div>
        </For>
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

