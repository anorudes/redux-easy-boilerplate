import React, { Component } from 'react';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/Main.scss';

// Application components
import { Header, Typography, Items, Footer } from './components/';

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
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
};
