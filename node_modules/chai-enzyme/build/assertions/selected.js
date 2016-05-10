'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selected;
function selected(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var sig = _ref.sig;

  this.assert(wrapper.isSelected(), function () {
    return 'expected ' + sig + ' to be selected ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to be selected ' + markup();
  });
}