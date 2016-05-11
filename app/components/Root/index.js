import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import * as actionCreators from 'redux/modules';

import Loading from 'components/Modules/Loading';
import Header from 'components/Modules/Header';

/* global styles for app */
require('./styles/app.scss');

@connect(
  state => ({ ...state.app }),
  dispatch => bindActionCreators({
    ...actionCreators.app,
  }, dispatch),
)
export default class Root extends Component {

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
    spinnerAsyncPage: PropTypes.bool,
    hideSpinnerAsyncPage: PropTypes.func,
  };

  componentDidMount() {
    const { hideSpinnerAsyncPage } = this.props;

    hideSpinnerAsyncPage();
  }

  componentDidUpdate(prevProps) {
    const { hideSpinnerAsyncPage } = this.props;

    if (prevProps.spinnerAsyncPage === true) {
      hideSpinnerAsyncPage();
    }
  }

  render() {
    const { spinnerAsyncPage } = this.props;

    return (
      <section>
        { /* title, meta tags */ }
        <Helmet
          title="posts"
        />

        <Header />
        {
          spinnerAsyncPage
            ? <Loading /> // show spinner for async component
            : this.props.children &&
                React.cloneElement(this.props.children, this.props)
        }
      </section>
    );
  }
}
