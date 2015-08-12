import React, { Component } from 'react';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/main.scss';

// Application components
import { Header, Typography, Items, Test, Complex, Footer } from './components/';

export default class Main extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-ls-6'>
              <Typography />
            </div>
            <div className='col-sm-6 col-ls-6'>
              <Items />
              <Test />
              <Complex />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
};
