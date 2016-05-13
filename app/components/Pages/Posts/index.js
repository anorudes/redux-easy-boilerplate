import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import * as actionCreators from 'redux/modules';

/* component styles */
require('./styles.scss');

@connect(
  state => ({ ...state.posts, ...state.app }),
  dispatch => bindActionCreators({
    ...actionCreators.posts,
  }, dispatch),
)
export default class Posts extends Component {

  static propTypes = {
    items: PropTypes.array,
    apiGetPosts: PropTypes.func,
    appMounted: PropTypes.bool,
  };

  componentDidMount() {
    const { apiGetPosts, appMounted } = this.props;

    if (!appMounted) { // what? appMounted? it's need for server-side-rendering, to avoid double fetch. see /app/components/Root/ and /app/server/server-ssr.js and /app/redux/modules/app/
      apiGetPosts(); // get posts from api server. see '/app/redux/modules/posts/posts.js' and  '/api/routes/posts.js'
    }
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
