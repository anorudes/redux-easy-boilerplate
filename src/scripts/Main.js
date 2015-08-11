import React, { Component } from 'react';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/Main.scss';

// Application components
import { Header, Items, Footer } from './components/';

export default class Main extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className='container'>
          <Items />
        </div>
        <Footer />
      </section>
    )
  }
};
