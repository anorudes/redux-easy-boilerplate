var dashify = require('dashify')

module.exports = function (options) {
  var directives = options.directives

  var keysSeen = {}

  return Object.keys(directives).reduce(function (result, originalKey) {
    var directive = dashify(originalKey)

    if (keysSeen[directive]) {
      throw new Error(originalKey + ' is specified more than once')
    }
    keysSeen[directive] = true

    var value = directives[originalKey]
    if (Array.isArray(value)) {
      value = value.join(' ')
    }

    var combined
    if (value) {
      combined = directive + ' ' + value
    } else {
      combined = directive
    }

    result.push(combined)

    return result
  }, []).join('; ')
}
