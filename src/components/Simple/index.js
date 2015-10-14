import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component styles */
import styles from './styles';

@connect(state => state.simple)
export default class Simple extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    simple: React.PropTypes.object,
  }

  render() {
    const { simple } = this.props;
    return (
      <div className={styles}>
        <h2>
          {simple.text}
        </h2>
      </div>
    );
  }
}
