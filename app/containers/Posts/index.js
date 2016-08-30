import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-connect';

import * as actionCreators from 'redux/modules';
import { apiGetPosts } from 'redux/modules/posts/posts';

/* component styles */
import s from './styles.css';

export class Posts extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

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
            items && items.map(post =>
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


export default asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    if (!getState().posts.items) {
      // Get items from api server // see: app/redux/modules/posts
      return dispatch(apiGetPosts());
    }
  },
}])(connect( // Conect to redux posts store // see: app/redux/modules/posts
  state => ({ ...state.posts }),
  dispatch => bindActionCreators({
    ...actionCreators.posts,
  }, dispatch),
)(Posts));
