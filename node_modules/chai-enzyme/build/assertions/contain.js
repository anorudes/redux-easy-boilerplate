'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contain;
function contain(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;

  this.assert(wrapper.hasNode(arg1), function () {
    return 'expected ' + sig + ' to contain #{exp} ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to contain #{exp} ' + markup();
  }, arg1);
}