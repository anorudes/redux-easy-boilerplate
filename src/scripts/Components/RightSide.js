import React, { Component } from 'react';

// Vendor styles
import 'bootstrap-webpack';

// Component styles
import 'style!./Styles/RightSide.scss';
let styles = require('./Styles/RightSide.scss').locals.styles;
import 'style!./Widgets/Widget.scss';
let stylesWidget = require('./Widgets/Widget.scss').locals.styles;

// Components
import Proposals from './Widgets/Proposals/Proposals.component.js';
import Deliveries from './Widgets/Deliveries/Deliveries.component.js';
import Orders from './Widgets/Orders/Orders.component.js';
import Gross from './Widgets/Gross/Gross.component.js';
import Backlog from './Widgets/Backlog/Backlog.component.js';
import OrdersTable from './Widgets/OrdersTable/OrdersTable.component.js';
import Performance from './Widgets/Performance/Performance.component.js';
import AdditionalServices from './Widgets/AdditionalServices/AdditionalServices.component.js';

export default class RightSide extends Component {
  render() {
    return (
      <div className={ `${ styles }` }>
        { /* 
        Widget fot the next oteration:
        <div className='row'>
          <div className='col-md-1 col-lg-1'>
            <Proposals className={ stylesWidget } />
          </div>
          <div className='col-md-1 col-lg-1'>
            <Deliveries className={ stylesWidget } />
          </div>
          <div className='col-md-1 col-lg-1'>
            <Orders className={ stylesWidget } />
          </div>
          <div className='col-md-5 col-lg-5'>
            <Gross className={ stylesWidget } />
          </div>
          <div className='col-md-4 col-lg-4'>
            <Backlog className={ stylesWidget } />
          </div>
        </div>
        */ }
        <div className='row'>
          <div className='col-md-6 col-lg-6'>
            <OrdersTable className={ stylesWidget } />
            <AdditionalServices className={ stylesWidget } />
          </div>
          <div className='col-md-6 col-lg-6'>
            <Performance className={ stylesWidget } />
          </div>
        </div>
      </div>
    );
  }
}
