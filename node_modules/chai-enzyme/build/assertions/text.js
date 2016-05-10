'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;
function text(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var flag = _ref.flag;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;

  var actual = wrapper.text();

  if (undefined !== arg1) {
    if (flag(this, 'contains')) {
      this.assert(actual.includes(String(arg1)), function () {
        return 'expected ' + sig + ' to contain text #{exp}, but it has #{act} ' + markup();
      }, function () {
        return 'expected ' + sig + ' not to contain text #{exp}, but it has #{act} ' + markup();
      }, arg1, actual);
    } else {
      this.assert(actual === String(arg1), function () {
        return 'expected ' + sig + ' to have text #{exp}, but it has #{act} ' + markup();
      }, function () {
        return 'expected ' + sig + ' not to have text #{exp}, but it has #{act} ' + markup();
      }, arg1, actual);
    }
  }

  flag(this, 'object', actual);
}