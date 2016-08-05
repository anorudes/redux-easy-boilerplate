import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
import s from './styles.css';

class AsyncExample extends Component {
  render() {
    return (
      <section className={s.root}>
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

export default AsyncExample;
