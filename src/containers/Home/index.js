import React from 'react';
import DocumentMeta from 'react-document-meta';

import { Simple } from 'components';

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

export const Home = () => (
  <div>
    <DocumentMeta {...metaData} />
    <h1>Home Page:</h1>
    <hr />
    <Simple />
  </div>
);
