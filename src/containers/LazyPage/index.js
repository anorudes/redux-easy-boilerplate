import React, { Component } from 'react';

class LazyPage extends Component {
  render() {
    return (
      <section>
        <h1>Lazy page</h1>
        <p>The contents of this page should be lazily loaded</p>
      </section>
    );
  }
}

module.exports = LazyPage;