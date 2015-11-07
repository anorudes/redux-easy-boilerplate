import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';

const metaData = {
  title: 'Redux test',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class List extends Component {
  render() {
    return (
      <section>
        <DocumentMeta { ...metaData } />
        <Items />
      </section>
    );
  }
}
