'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;

var _enzyme = require('enzyme');

var _CheerioTestWrapper = require('./CheerioTestWrapper');

var _CheerioTestWrapper2 = _interopRequireDefault(_CheerioTestWrapper);

var _ShallowTestWrapper = require('./ShallowTestWrapper');

var _ShallowTestWrapper2 = _interopRequireDefault(_ShallowTestWrapper);

var _ReactTestWrapper = require('./ReactTestWrapper');

var _ReactTestWrapper2 = _interopRequireDefault(_ReactTestWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrap(el) {
  if (el instanceof _enzyme.ShallowWrapper) {
    return new _ShallowTestWrapper2.default(el);
  }

  if (el instanceof _enzyme.ReactWrapper) {
    return new _ReactTestWrapper2.default(el);
  }

  if (el && el._root && el.options) {
    return new _CheerioTestWrapper2.default(el);
  }
}