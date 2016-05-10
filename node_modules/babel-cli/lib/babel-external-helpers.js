/*istanbul ignore next*/"use strict";

var /*istanbul ignore next*/_commander = require("commander");

/*istanbul ignore next*/
var _commander2 = _interopRequireDefault(_commander);

var /*istanbul ignore next*/_babelCore = require("babel-core");

/*istanbul ignore next*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*istanbul ignore next*/_commander2.default.option("-l, --whitelist [whitelist]", "Whitelist of helpers to ONLY include", /*istanbul ignore next*/_babelCore.util.list);
/*istanbul ignore next*/_commander2.default.option("-t, --output-type [type]", "Type of output (global|umd|var)", "global");

/*istanbul ignore next*/_commander2.default.usage("[options]");
/*istanbul ignore next*/_commander2.default.parse(process.argv);

console.log( /*istanbul ignore next*/(0, _babelCore.buildExternalHelpers)( /*istanbul ignore next*/_commander2.default.whitelist, /*istanbul ignore next*/_commander2.default.outputType));