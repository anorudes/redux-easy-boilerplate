import React, { Component } from 'react';
import { Link } from 'react-router';

import 'bootstrap-webpack';

// Global styles
import 'style!./styles/main.scss';

// Application components
import { Header, Typography, Footer } from './components/';

export default class Main extends Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <section>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-ls-6">
              <Typography />
            </div>
            <div className="col-sm-6 col-ls-6">
              <h1>Examples:</h1>
              <div className="btn-group" role="group" aria-label="...">
                <Link to={`/simple/`}>
                  <button type="button" className="btn btn-default">Simple component</button>
                </Link>
                { ' ' }
                <Link to={`/items/`}>
                  <button type="button" className="btn btn-default">Complex component</button>
                </Link>
              </div>
              { this.props.children }
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
