'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _TestWrapper2 = require('./TestWrapper');

var _TestWrapper3 = _interopRequireDefault(_TestWrapper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShallowTestWrapper = function (_TestWrapper) {
  _inherits(ShallowTestWrapper, _TestWrapper);

  function ShallowTestWrapper(wrapper) {
    _classCallCheck(this, ShallowTestWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShallowTestWrapper).call(this));

    _this.wrapper = wrapper;
    return _this;
  }

  _createClass(ShallowTestWrapper, [{
    key: 'inspect',
    value: function inspect() {
      var name = this.wrapper.root.unrendered.type.displayName || this.wrapper.root.unrendered.type.name || '???';

      if (this.wrapper.root === this.wrapper) {
        return '<' + name + ' />';
      }

      return 'the node in <' + name + ' />';
    }
  }, {
    key: 'attr',
    value: function attr(name) {
      return this.el.attr(name);
    }
  }, {
    key: 'html',
    value: function html() {
      return this.wrapper.html();
    }
  }, {
    key: 'style',
    value: function style(name) {
      return this.el.css(name);
    }
  }, {
    key: 'tagName',
    value: function tagName() {
      return this.el[0].name;
    }
  }, {
    key: 'data',
    value: function data(name) {
      return this.el.data(name);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(name) {
      return this.wrapper.hasClass(name);
    }
  }, {
    key: 'classNames',
    value: function classNames() {
      return this.wrapper.props().className;
    }
  }, {
    key: 'id',
    value: function id() {
      return this.wrapper.props().id;
    }
  }, {
    key: 'value',
    value: function value() {
      return this.attr('value');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.is(':checked');
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.is(':disabled');
    }
  }, {
    key: 'isSelected',
    value: function isSelected() {
      throw new Error('not implemented yet');
    }
  }, {
    key: 'is',
    value: function is(selector) {
      return this.el.is(selector);
    }
  }, {
    key: 'hasNode',
    value: function hasNode(node) {
      return this.wrapper.contains(node);
    }
  }, {
    key: 'hasRef',
    value: function hasRef() {
      throw new Error('shallow rendering does not support refs');
    }
  }, {
    key: 'el',
    get: function get() {
      if (!this.__el) {
        this.__el = (0, _cheerio2.default)(this.wrapper.html());
      }

      return this.__el;
    }
  }]);

  return ShallowTestWrapper;
}(_TestWrapper3.default);

exports.default = ShallowTestWrapper;