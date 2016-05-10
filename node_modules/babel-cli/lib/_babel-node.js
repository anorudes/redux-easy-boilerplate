/*istanbul ignore next*/"use strict";

var /*istanbul ignore next*/_pathIsAbsolute = require("path-is-absolute");

/*istanbul ignore next*/
var _pathIsAbsolute2 = _interopRequireDefault(_pathIsAbsolute);

var /*istanbul ignore next*/_commander = require("commander");

/*istanbul ignore next*/
var _commander2 = _interopRequireDefault(_commander);

var /*istanbul ignore next*/_module2 = require("module");

/*istanbul ignore next*/
var _module3 = _interopRequireDefault(_module2);

var /*istanbul ignore next*/_util = require("util");

var /*istanbul ignore next*/_path = require("path");

/*istanbul ignore next*/
var _path2 = _interopRequireDefault(_path);

var /*istanbul ignore next*/_repl = require("repl");

/*istanbul ignore next*/
var _repl2 = _interopRequireDefault(_repl);

var /*istanbul ignore next*/_babelCore = require("babel-core");

/*istanbul ignore next*/
var babel = _interopRequireWildcard(_babelCore);

var /*istanbul ignore next*/_vm = require("vm");

/*istanbul ignore next*/
var _vm2 = _interopRequireDefault(_vm);

var /*istanbul ignore next*/_lodash = require("lodash");

/*istanbul ignore next*/
var _lodash2 = _interopRequireDefault(_lodash);

/*istanbul ignore next*/require("babel-polyfill");

var /*istanbul ignore next*/_babelRegister = require("babel-register");

/*istanbul ignore next*/
var _babelRegister2 = _interopRequireDefault(_babelRegister);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var program = new /*istanbul ignore next*/_commander2.default.Command("babel-node");

program.option("-e, --eval [script]", "Evaluate script");
program.option("-p, --print [code]", "Evaluate script and print result");
program.option("-o, --only [globs]", "");
program.option("-i, --ignore [globs]", "");
program.option("-x, --extensions [extensions]", "List of extensions to hook into [.es6,.js,.es,.jsx]");
program.option("-w, --plugins [string]", "", /*istanbul ignore next*/_babelCore.util.list);
program.option("-b, --presets [string]", "", /*istanbul ignore next*/_babelCore.util.list);

var pkg = require("../package.json");
program.version(pkg.version);
program.usage("[options] [ -e script | script.js ] [arguments]");
program.parse(process.argv);

//

/*istanbul ignore next*/(0, _babelRegister2.default)({
  extensions: program.extensions,
  ignore: program.ignore,
  only: program.only,
  plugins: program.plugins,
  presets: program.presets
});

//

var replPlugin = function replPlugin() /*istanbul ignore next*/{
  return {
    visitor: { /*istanbul ignore next*/
      ModuleDeclaration: function ModuleDeclaration(path) {
        throw path.buildCodeFrameError("Modules aren't supported in the REPL");
      },
      /*istanbul ignore next*/VariableDeclaration: function VariableDeclaration(path) {
        if (path.node.kind !== "var") {
          throw path.buildCodeFrameError("Only `var` variables are supported in the REPL");
        }
      }
    }
  };
};

//

var _eval = function _eval(code, filename) {
  code = code.trim();
  if (!code) return undefined;

  code = babel.transform(code, {
    filename: filename,
    presets: program.presets,
    plugins: (program.plugins || []).concat([replPlugin])
  }).code;

  return (/*istanbul ignore next*/_vm2.default.runInThisContext(code, {
      filename: filename
    })
  );
};

if (program.eval || program.print) {
  var code = program.eval;
  if (!code || code === true) code = program.print;

  global.__filename = "[eval]";
  global.__dirname = process.cwd();

  var _module = new /*istanbul ignore next*/_module3.default(global.__filename);
  _module.filename = global.__filename;
  _module.paths = /*istanbul ignore next*/_module3.default._nodeModulePaths(global.__dirname);

  global.exports = _module.exports;
  global.module = _module;
  global.require = _module.require.bind(_module);

  var result = _eval(code, global.__filename);
  if (program.print) {
    var output = /*istanbul ignore next*/_lodash2.default.isString(result) ? result : /*istanbul ignore next*/(0, _util.inspect)(result);
    process.stdout.write(output + "\n");
  }
} else {
  if (program.args.length) {
    /*istanbul ignore next*/
    (function () {
      // slice all arguments up to the first filename since they're babel args that we handle
      var args = process.argv.slice(2);

      var i = 0;
      var ignoreNext = false;
      /*istanbul ignore next*/_lodash2.default.each(args, function (arg, i2) {
        if (ignoreNext) {
          ignoreNext = false;
          return;
        }

        if (arg[0] === "-") {
          var parsedArg = program[arg.slice(2)];
          if (parsedArg && parsedArg !== true) {
            ignoreNext = true;
          }
        } else {
          i = i2;
          return false;
        }
      });
      args = args.slice(i);

      // make the filename absolute
      var filename = args[0];
      if (! /*istanbul ignore next*/(0, _pathIsAbsolute2.default)(filename)) args[0] = /*istanbul ignore next*/_path2.default.join(process.cwd(), filename);

      // add back on node and concat the sliced args
      process.argv = ["node"].concat(args);
      process.execArgv.unshift(__filename);

      /*istanbul ignore next*/_module3.default.runMain();
    })();
  } else {
    replStart();
  }
}

function replStart() {
  /*istanbul ignore next*/_repl2.default.start({
    prompt: "> ",
    input: process.stdin,
    output: process.stdout,
    eval: replEval,
    useGlobal: true
  });
}

function replEval(code, context, filename, callback) {
  var err = /*istanbul ignore next*/void 0;
  var result = /*istanbul ignore next*/void 0;

  try {
    if (code[0] === "(" && code[code.length - 1] === ")") {
      code = code.slice(1, -1); // remove "(" and ")"
    }

    result = _eval(code, filename);
  } catch (e) {
    err = e;
  }

  callback(err, result);
}