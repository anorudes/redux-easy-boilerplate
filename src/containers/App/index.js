import React from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
import 'bootstrap-webpack';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header, Typography, Footer } from 'components';

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

export const App = (props) => (
  <section>
    <DocumentMeta {...metaData} />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-ls-6">
          <Typography />
        </div>
        <div className="col-sm-6 col-ls-6">
          <h1>Router examples:</h1>
          <div className="btn-group" role="group" aria-label="...">
            <Link to={`/home/`}>
              <button type="button" className="btn btn-default">Home</button>
            </Link>
            {' '}
            <Link to={`/list/`}>
              <button type="button" className="btn btn-default">List</button>
            </Link>
          </div>
          {props.children}
        </div>
      </div>
    </div>
    <Footer />
  </section>
);
