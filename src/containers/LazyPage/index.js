import React, { Component } from 'react';
import './styles/lazy.scss';


class LazyPage extends Component {
  render() {
    return (
      <section>
        <h1>Lazy page</h1>
        <p className={'lazy-class'}>The contents of this page should be lazily loaded</p>
      </section>
    );
  }
}

module.exports = LazyPage;