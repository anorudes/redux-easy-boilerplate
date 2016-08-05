import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import R from 'ramda';

import * as actionCreators from 'redux/modules';

/* component styles */
import s from './styles.css';

export class Posts extends Component {
  static propTypes = {
    items: PropTypes.array,
    apiGetPosts: PropTypes.func,
  };

  componentDidMount() {
    const { items, apiGetPosts } = this.props;

    if (R.isEmpty(items)) {
      apiGetPosts(); // get posts from api server. see '/app/redux/modules/posts/posts.js' and  '/api/routes/posts.js'
    }
  }

  render() {
    const { items } = this.props;

    return (
      <section className={s.root}>
        <Helmet
          title="posts"
        />
        <h1>Posts page</h1>
        <div className={s.list}>
          { // Render posts
            items.map(post =>
              <div className={s.item} key={post.id}>
                {post.id}) {post.text}
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({ ...state.posts }),
  dispatch => bindActionCreators({
    ...actionCreators.posts,
  }, dispatch),
)(Posts);
