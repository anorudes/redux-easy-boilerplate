// From https://gist.github.com/epeli/11209665

var Promise = require("bluebird");

// So you can `var request = require("superagent-bluebird-promise")`
var superagent = module.exports = require("superagent");
var Request = superagent.Request;

Promise.config({
    // Enable cancellation.
    cancellation: true
});
// Create custom error type.
// Create a new object, that prototypally inherits from the Error constructor.
var SuperagentPromiseError = function(message, originalError) {
  var stack;
  this.message = message;
  this.name = 'SuperagentPromiseError';
  this.originalError = originalError;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
    stack = this.stack;
  }
  else {
    stack = (new Error(message)).stack;
  }

  if (Object.defineProperty) {
    Object.defineProperty(this, 'stack', {
      get: function() {
        if (this.originalError) {
          return stack + '\nCaused by:  ' + this.originalError.stack;
        }

        return stack;
      }
    });
  }
};

SuperagentPromiseError.prototype = new Error();
SuperagentPromiseError.prototype.constructor = SuperagentPromiseError;
superagent.SuperagentPromiseError = SuperagentPromiseError;

/**
 * @namespace utils
 * @class Superagent
 */

/**
 *
 * Add promise support for superagent/supertest
 *
 * Call .promise() to return promise for the request
 *
 * @method then
 * @return {Bluebird.Promise}
 */
Request.prototype.promise = function() {
  var req = this;
  var error;

  return new Promise(function(resolve, reject, onCancel) {
      req.end(function(err, res) {
        if (typeof res !== "undefined" && res.status >= 400) {
          var msg = 'cannot ' + req.method + ' ' + req.url + ' (' + res.status + ')';
          error = new SuperagentPromiseError(msg);
          error.status = res.status;
          error.body = res.body;
          error.res = res;
          reject(error);
        } else if (err) {
          reject(new SuperagentPromiseError('Bad request', err));
        } else {
          resolve(res);
        }
      });
      onCancel(function() {
        req.abort();
       });

    });
};

/**
 *
 * Make superagent requests Promises/A+ conformant
 *
 * Call .then([onFulfilled], [onRejected]) to register callbacks
 *
 * @method then
 * @param {function} [onFulfilled]
 * @param {function} [onRejected]
 * @return {Bluebird.Promise}
 */
Request.prototype.then = function() {
  var promise = this.promise();
  return promise.then.apply(promise, arguments);
};
