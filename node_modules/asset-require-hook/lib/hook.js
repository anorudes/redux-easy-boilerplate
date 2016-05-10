'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHook;
function addHook(extension, compile) {
  require.extensions[extension] = function hook(module, file) {
    var url = compile(file);
    return module._compile('module.exports = ' + JSON.stringify(url), file);
  };
}
module.exports = exports['default'];