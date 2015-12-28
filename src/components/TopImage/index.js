import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* utils */
import { setParallax } from '../../utils/parallax';

/* component styles */
import { styles } from './styles';

export class TopImage extends Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    setParallax(this.refs.parallax, 10);
  }

  render() {
    return (
      <section className={`${styles}`} ref="parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <ReactCSSTransitionGroup transitionName="title-animation"
                                       transitionAppear
                                       transitionAppearTimeout={1300}>
                <h1 className="title">
                  Redux Easy Boilerplate
                </h1>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup transitionName="text-animation"
                                       transitionAppear
                                       transitionAppearTimeout={1300}>
                <p>
                  Start your project easy and fast with modern tools
                </p>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
