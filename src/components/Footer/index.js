import React, { Component } from 'react';

/* component styles */
import styles from './styles';

/* authors */
const AUTHORS = [
  {
    id: 1,
    name: 'anorudes'
  }, {
    id: 2,
    name: 'keske'
  }
];

export class Footer extends Component {
  render() {
    return (
      <footer className={`${ styles }`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a className="github-button"
               href="https://github.com/anorudes/redux-easy-boilerplate"
               data-icon="octicon-star"
               data-count-href="/anorudes/redux-easy-boilerplate/stargazers"
               data-count-api="/repos/anorudes/redux-easy-boilerplate#stargazers_count"
               data-count-aria-label="# stargazers on GitHub"
               aria-label="Star anorudes/redux-easy-boilerplate on GitHub">
               Star
            </a>
              {AUTHORS.map(function(author) {
                return <div key={author.id}>
                  <a className="github-button" href={`https://github.com/${author.name}`}
                    data-count-href={`/${author.name}/followers`}
                    data-count-api={`/users/${author.name}#followers`}
                    data-count-aria-label="# followers on GitHub"
                    aria-label={`Follow @${author.name} on GitHub`}>
                    @{author.name}
                  </a>
                </div>
              })}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
