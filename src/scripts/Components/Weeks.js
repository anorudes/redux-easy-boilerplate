import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { setShops } from '../Actions/Actions.js';

// Component styles
import 'style!./Styles/Weeks.scss';
let styles = require('./Styles/Weeks.scss').locals.styles;

class Weeks extends Component {
  render() {
    const { weeks } = this.props;
    return (
      <div className={ `${ styles }` }>
          { weeks.map((week) => {
            return week;
          })}
      </div>
    );
  }
}

function select(state) {
  function getWeeks(data) {
    let weeks = [];

    data.map((shop) => {
      weeks.push(shop.Week);
    });

    return _.uniq(weeks);
  }
  return {
    weeks: getWeeks(state.weeks)
  };
}

export default connect(select)(Weeks);
