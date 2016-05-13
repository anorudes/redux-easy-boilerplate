import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import R from 'ramda';

import * as actionCreators from 'redux/modules';

/* component styles */
require('./styles.scss');

@connect(
  state => ({ ...state.posts }),
  dispatch => bindActionCreators({
    ...actionCreators.posts,
  }, dispatch),
)
export default class Posts extends Component {

  static propTypes = {
    items: PropTypes.array,
    apiGetPosts: PropTypes.func,
  };

  componentDidMount() {
    const { apiGetPosts, items } = this.props;

    // Get posts from api server
    // See in '/app/redux/modules/posts/posts.js' and  '/api/routes/posts.js'

    R.isEmpty(items) && apiGetPosts();
  }

  render() {
    const { items } = this.props;

    return (
      <section className="posts">
        <Helmet
          title="posts"
        />
        <h1>Posts page</h1>
        <div className="posts__list">
          { // Render posts
            items.map(post =>
              <div className="post__item" key={post.id}>
                {post.id}) {post.text}
              </div>
            )
          }
        </div>
      </section>
    );
  }
}
