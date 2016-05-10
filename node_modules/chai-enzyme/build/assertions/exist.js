'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exist;
function exist(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var sig = _ref.sig;

  this.assert(wrapper.isPresent(), function () {
    return 'expected ' + sig + ' to exist ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to exist ' + markup();
  });
}