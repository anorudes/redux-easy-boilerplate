import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import R from 'ramda';

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

  static propTypes = {
    posts: PropTypes.object,
    apiGetPosts: PropTypes.func,
  };

  componentDidMount() {
    const { apiGetPosts, posts } = this.props;
    const items = posts.get('items').toJS();

    // Get posts from api server
    // See in '/app/redux/modules/posts/posts.js' and  '/api/routes/posts.js'
    R.isEmpty(items) && apiGetPosts();
  }

  render() {
    const { posts } = this.props;
    const items = posts.get('items').toJS();

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
