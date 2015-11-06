import React, { Component } from 'react';
import 'bootstrap-webpack';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header, Footer } from 'components';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render = () =>
    <section>
      <Header />
      { this.props.children }
      <Footer />
    </section>
}
