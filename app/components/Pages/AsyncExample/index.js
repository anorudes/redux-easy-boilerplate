import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class AsyncExample extends Component {
  render() {
    return (
      <section className="example">
        <Helmet
          title="async example"
        />
        <h1>Async page</h1>
        example<br />
        example<br />
        example<br />
        example<br />
        example<br />
        example<br />
      </section>
    );
  }
}
