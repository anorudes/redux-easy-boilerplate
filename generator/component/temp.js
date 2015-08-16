import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component styles
import styles from './<%= name %>.styles.js';

// Actions
import { example } from '../../actions';

export default class <%= name %> extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    data: React.PropTypes.React.PropTypes.string,
  };

  render() {
    const { dispatch, data } = this.props;
    return (
      <div className={ styles } >
        <h2>
          <%= name %>
        </h2>
        <p>
          Data: { data }
        </p>
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.<%= name %>,
  };
}

export default connect(select)(<%= name %>);
