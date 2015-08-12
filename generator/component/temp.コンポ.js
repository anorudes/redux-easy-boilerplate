import template from './<%= name %>.html';
import controller from './<%= name %>.コントローラー';
import './<%= name %>.scss';

let <%= name %>コンポ = function() {
  return {
    template,
    controller,
    restrict: 'E',
      controllerAs: 'vm',
      scope: {},
      bindToController: true
  };
};

export default <%= name %>コンポ;
