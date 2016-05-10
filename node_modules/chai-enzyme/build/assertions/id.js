'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = id;
function id(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;

  var actual = wrapper.id();

  this.assert(wrapper.hasId(arg1), function () {
    return 'expected ' + sig + ' to have a #{exp} id, but it has #{act} ' + markup();
  }, function () {
    return 'expected ' + sig + ' not to have a #{exp} id, but it has #{act} ' + markup();
  }, arg1, actual);
}