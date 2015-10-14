import React from 'react';
import DocumentMeta from 'react-document-meta';

import { Items } from 'components';

const metaData = {
  title: 'Items title',
  description: 'I\'m a description. I can to create multiple tags.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export const List = () => (
  <div>
    <DocumentMeta {...metaData} />
    <h1>List page:</h1>
    <Items />
  </div>
);
