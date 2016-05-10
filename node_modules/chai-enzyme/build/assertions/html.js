'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = html;
function html(_ref) {
  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var flag = _ref.flag;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;

  var actual = wrapper.html();

  if (undefined !== arg1) {
    this.assert(actual === arg1, function () {
      return 'expected ' + sig + ' to be #{exp}, but it was #{act} ' + markup();
    }, function () {
      return 'expected ' + sig + ' not to be #{exp}, but it was #{act} ' + markup();
    }, arg1, actual);
  }

  flag(this, 'object', actual);
}