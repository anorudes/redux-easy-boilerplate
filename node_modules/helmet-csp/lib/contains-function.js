var some = require('lodash.some')
var isFunction = require('lodash.isfunction')

module.exports = function containsFunction (obj) {
  return some(obj, function (arr) {
    if (!Array.isArray(arr)) {
      arr = [arr]
    }

    return arr.some(isFunction)
  })
}
