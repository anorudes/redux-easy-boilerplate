import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

// Component styles
import styles from './SimpleComponent.styles.js';

export default class SimpleComponent extends Component {
  render() {
    const metaData = {
      title: 'SimpleComponent Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags',
        },
      },
    };
    return (
      <div className={ styles }>
        <DocumentMeta {...metaData} />
        <h2>
          SimpleComponent
        </h2>
      </div>
    );
  }
}
