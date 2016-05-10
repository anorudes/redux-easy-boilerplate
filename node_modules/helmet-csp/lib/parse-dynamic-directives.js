var reduce = require('lodash.reduce')
var isFunction = require('lodash.isfunction')

module.exports = function parseDynamicDirectives (directives, functionArgs) {
  return reduce(directives, function (result, value, key) {
    if (Array.isArray(value)) {
      result[key] = value.map(function (element) {
        if (isFunction(element)) {
          return element.apply(null, functionArgs)
        } else {
          return element
        }
      })
    } else if (isFunction(value)) {
      result[key] = value.apply(null, functionArgs)
    } else {
      result[key] = value
    }

    return result
  }, {})
}
