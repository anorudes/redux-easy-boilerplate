import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import superagent from 'superagent';

import * as actionCreators from 'redux/modules';

/* component styles */
require('./styles.scss');

@connect(
  ({ posts }) => ({ posts }),
  dispatch => bindActionCreators({
    ...actionCreators.posts,
  }, dispatch),
)
export default class Posts extends Component {
  constructor() {
    super();
    this.state = { policies: {} };
  }

  componentDidMount() {
    const { apiGetPosts } = this.props;

    // Get posts from api server
    apiGetPosts();
    superagent
      .get('/policies')
      .query({ coverageAmount: 500000, term: 25 })
      .end((err, res) => {
        this.setState({ policies: res.body.underwritten_policies });
      });
  }

  render() {
    return (
      <section className="posts">
        <h1>Heres ur data</h1>
        <div className="posts__list">
          { JSON.stringify(this.state.policies) }
        </div>
      </section>
    );
  }
}
