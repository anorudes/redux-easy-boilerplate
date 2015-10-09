import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* component styles */
import styles from './styles';

const metaData = {
  title: 'Simple Title',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export default class Simple extends Component {
  render() {
    return (
      <div className={styles}>
        <DocumentMeta {...metaData} />
        <h2>
          Simple
        </h2>
      </div>
    );
  }
}
