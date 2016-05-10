'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = descendants;
function descendants(_ref) {
  var _this = this;

  var wrapper = _ref.wrapper;
  var markup = _ref.markup;
  var arg1 = _ref.arg1;
  var sig = _ref.sig;
  var flag = _ref.flag;

  var exactlyCount = flag(this, 'exactlyCount');

  if (exactlyCount) {
    (function () {
      var descendantCount = wrapper.getDescendantsCount(arg1);

      _this.assert(descendantCount === exactlyCount, function () {
        return 'expected ' + sig + ' to have ' + exactlyCount + ' descendants #{exp} but actually found ' + descendantCount + markup();
      }, function () {
        return 'expected ' + sig + ' not to have ' + exactlyCount + ' descendants #{exp} but actually found ' + descendantCount + markup();
      }, arg1);
    })();
  } else {
    this.assert(wrapper.hasDescendants(arg1), function () {
      return 'expected ' + sig + ' to have descendants #{exp} ' + markup();
    }, function () {
      return 'expected ' + sig + ' not to have descendants #{exp} ' + markup();
    }, arg1);
  }
}