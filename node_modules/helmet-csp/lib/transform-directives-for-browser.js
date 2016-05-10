var assign = require('lodash.assign')
var reduce = require('lodash.reduce')

var handlers = {
  Firefox: function (browser, directives) {
    var version = parseFloat(browser.version)

    if (version >= 4 && version < 23) {
      var basePolicy = {}
      if (version < 5) {
        basePolicy.allow = ['*']
      } else {
        basePolicy.defaultSrc = ['*']
      }

      return reduce(directives, function (result, value, key) {
        if (key === 'connectSrc') {
          result.xhrSrc = value
        } else if ((key === 'defaultSrc') && (version < 5)) {
          result.allow = value
        } else {
          result[key] = value
        }

        if (key === 'scriptSrc') {
          var optionsValues = []

          if (value.indexOf("'unsafe-inline'") !== -1) {
            optionsValues.push('inline-script')
          }
          if (value.indexOf("'unsafe-eval'") !== -1) {
            optionsValues.push('eval-script')
          }

          if (optionsValues.length !== 0) {
            result.options = optionsValues
          }
        }

        return result
      }, basePolicy)
    } else {
      return directives
    }
  },

  'Chrome Mobile': function (browser, directives) {
    if (browser.os.family === 'iOS') {
      if (!directives.connectSrc) {
        return assign({ connectSrc: ["'self'"] }, directives)
      } else if (directives.connectSrc.indexOf("'self'") === -1) {
        return assign({}, directives, {
          connectSrc: ["'self'"].concat(directives.connectSrc)
        })
      } else {
        return directives
      }
    } else {
      return directives
    }
  }
}

module.exports = function transformDirectivesForBrowser (browser, directives) {
  var handler = handlers[browser.name]

  if (handler) {
    return handler(browser, directives)
  } else {
    return directives
  }
}
