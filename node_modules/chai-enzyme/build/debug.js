'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debug;

var _html = require('html');

function indent(n) {
  return Array(n + 1).join(' ');
}

function debug(wrapper) {
  var html = null;

  try {
    html = (0, _html.prettyPrint)(wrapper.html(), { indent_size: 2 });
  } catch (err) {
    return 'HTML: Not available due to: ' + err.message;
  }

  var out = '\n\nHTML:\n\n' + html;

  return out.split('\n').map(function (line) {
    return indent(5) + line;
  }).join('\n');
}