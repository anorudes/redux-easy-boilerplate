import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>コンポ from './<%= name %>.コンポ';

let <%= name %>Module = angular.module('<%= name %>', [
    uiRouter
  ])
  .directive('<%= name %>', <%= name %>コンポ);

export default <%= name %>Module;
