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
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
