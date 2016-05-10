"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestWrapper = function () {
  function TestWrapper() {
    _classCallCheck(this, TestWrapper);
  }

  _createClass(TestWrapper, [{
    key: "isPresent",
    value: function isPresent() {
      return this.wrapper.length > 0;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.wrapper.children().length === 0;
    }
  }, {
    key: "hasId",
    value: function hasId(id) {
      return this.id() === id;
    }
  }, {
    key: "hasValue",
    value: function hasValue(value) {
      return this.value() === value;
    }
  }, {
    key: "hasDescendants",
    value: function hasDescendants(selector) {
      return this.getDescendantsCount(selector) > 0;
    }
  }, {
    key: "getDescendantsCount",
    value: function getDescendantsCount(selector) {
      return this.wrapper.find(selector).length;
    }
  }, {
    key: "state",
    value: function state(key) {
      return this.wrapper.state(key);
    }
  }, {
    key: "prop",
    value: function prop(key) {
      return this.wrapper.prop(key);
    }
  }, {
    key: "text",
    value: function text() {
      return this.wrapper.text();
    }
  }]);

  return TestWrapper;
}();

exports.default = TestWrapper;