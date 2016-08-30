import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
import s from './styles.css';

class About extends Component {
  render() {
    // Get window height if client (just for example)
    // Why need?
    // Just try remove __CLIENT__ check and start server-side-rendering
    const windowHeight = __CLIENT__ ? window.innerHeight : null;

    return (
      <section className={s.root}>
        <Helmet
          title="about"
        />
        <h1>Example page</h1>
        window height = {windowHeight} (see __CLIENT__ condition in code)<br />

        <img src="/static/images/example.jpg" alt="" />
      </section>
    );
  }
}

export default About;
