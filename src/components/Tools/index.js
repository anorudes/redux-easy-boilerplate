import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Tools extends Component {
  render() {
    return (
      <section className={ `${ styles }` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Boilerplate contains
              </h2>
            </div>
          </div>

          <div className="row">

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/reactjs.png" />
              <h4>
                React
              </h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/redux.png" />
              <h4>
                Redux
              </h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/babel.png" />
              <h4>
                Babel
              </h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/webpack.png" />
              <h4>
                Webpack
              </h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/bootstrap.png" />
              <h4>
                Bootstrap
              </h4>
            </div>

            <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 tool">
              <img src="/src/files/logos/mocha.png" />
              <h4>
                Mocha
              </h4>
            </div>

          </div>

        </div>
      </section>
    );
  }
}
