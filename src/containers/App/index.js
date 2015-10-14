import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import 'bootstrap-webpack';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header, Footer } from 'components';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'I am a description, and I can to create a multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <div>
        <DocumentMeta {...metaData} />
        <Header />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
