'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = empty;
function empty(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var sig = _ref.sig;

  this.assert(wrapper.isEmpty(), function () {
    return 'expected ' + sig + ' to be empty ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to be empty ' + markup();
  });
}