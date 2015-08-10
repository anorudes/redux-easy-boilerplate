import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { setShops, getCountries } from '../Actions/Actions.js';

// Component styles
import 'style!./Styles/Shops.scss';
let styles = require('./Styles/Shops.scss').locals.styles;

class Shops extends Component {
  render() {
    return (
      <div className={ `${ styles } list-group` }>
        <CountriesList { ...this.props } />
      </div>
    );
  }
}

class CountriesList extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className='countries'>
        { countries.map((country) => {
          return (
            <div className='country'>
              { country }
              <CitiesList { ...this.props } />
            </div>
          );
        })}
      </div>
    );
  }
}

class CitiesList extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className='cities'>
        { cities.map((city) => {
          return (
            <div className='city'>
              { city }
              <ShopsList { ...this.props } />
            </div>
          );
        })}
      </div>
    );
  }
}

class ShopsList extends Component {
  render() {
    const { shops } = this.props;
    return (
      <div className='shops'>
        { shops.map((shop) => {
          return (
            <div className='shop'>
              { shop }
            </div>
          );
        })}
      </div>
    );
  }
}

function select(state) {
  function getCountries(data) {
    let countries = [];

    data.map((shop) => {
      countries.push(shop.Orglevel1);
    });

    return _.uniq(countries);
  };

  function getCities(data) {
    let cities = [];

    data.map((shop) => {
      cities.push(shop.Orglevel2);
    });

    return _.uniq(cities);
  };

  function getShop(data) {
    let shops = [];

    data.map((shop) => {
      shops.push(shop.Orglevel3);
    });

    return _.uniq(shops);
  };

  return {
    // shops: state.shops,
    countries: getCountries(state.shops),
    cities: getCities(state.shops),
    shops: getShop(state.shops),
  };
}

export default connect(select)(Shops);