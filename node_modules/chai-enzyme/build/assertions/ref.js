'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ref;
function ref(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;

  this.assert(wrapper.hasRef(arg1), function () {
    return 'expected ' + sig + ' to have a #{exp} ref ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to have a #{exp} ref ' + markup();
  }, arg1);
}