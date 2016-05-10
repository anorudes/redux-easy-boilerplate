'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generic;
function generic(assertion, desc) {
  return function (_ref) {
    var wrapper = _ref.wrapper;
    var markup = _ref.markup;
    var flag = _ref.flag;
    var inspect = _ref.inspect;
    var arg1 = _ref.arg1;
    var arg2 = _ref.arg2;
    var sig = _ref.sig;

    var actual = wrapper[assertion](arg1);

    if (!flag(this, 'negate') || undefined === arg2) {
      this.assert(undefined !== actual, function () {
        return 'expected ' + sig + ' to have a #{exp} ' + desc + markup();
      }, function () {
        return 'expected ' + sig + ' not to have a #{exp} ' + desc + markup();
      }, arg1);
    }

    if (undefined !== arg2) {
      this.assert(arg2 === actual, function () {
        return 'expected ' + sig + ' to have a ' + inspect(arg1) + ' ' + desc + ' with the value #{exp}, but the value was #{act}' + markup();
      }, function () {
        return 'expected ' + sig + ' not to have a ' + inspect(arg1) + ' ' + desc + ' with the value #{act}' + markup();
      }, arg2, actual);
    }

    flag(this, 'object', actual);
  };
}