import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export class Home extends Component {
  render = () =>
    <section>
      <DocumentMeta {...metaData} />
      <TopImage />
      <Tools />
    </section>
}
