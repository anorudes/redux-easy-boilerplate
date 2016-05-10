var camelize = require('camelize')
var cspBuilder = require('content-security-policy-builder')
var platform = require('platform')
var containsFunction = require('./lib/contains-function')
var getHeaderKeysForBrowser = require('./lib/get-header-keys-for-browser')
var transformDirectivesForBrowser = require('./lib/transform-directives-for-browser')
var parseDynamicDirectives = require('./lib/parse-dynamic-directives')
var ALL_HEADERS = require('./lib/all-headers')

module.exports = function csp (options) {
  options = options || {}

  var originalDirectives = camelize(options.directives || {})
  var directivesAreDynamic = containsFunction(originalDirectives)
  var shouldBrowserSniff = options.browserSniff !== false

  if (options.reportOnly && !originalDirectives.reportUri) {
    throw new Error('Please remove reportOnly or add a report-uri.')
  }

  if (shouldBrowserSniff) {
    return function csp (req, res, next) {
      var userAgent = req.headers['user-agent']

      var browser
      if (userAgent) {
        browser = platform.parse(userAgent)
      } else {
        browser = {}
      }

      var headerKeys
      if (options.setAllHeaders || !userAgent) {
        headerKeys = ALL_HEADERS
      } else {
        headerKeys = getHeaderKeysForBrowser(browser, options)
      }

      if (headerKeys.length === 0) {
        next()
        return
      }

      var directives = transformDirectivesForBrowser(browser, originalDirectives)

      if (directivesAreDynamic) {
        directives = parseDynamicDirectives(directives, [req, res])
      }

      var policyString = cspBuilder({ directives: directives })

      headerKeys.forEach(function (headerKey) {
        if (options.reportOnly) {
          headerKey += '-Report-Only'
        }
        res.setHeader(headerKey, policyString)
      })

      next()
    }
  } else {
    var headerKeys
    if (options.setAllHeaders) {
      headerKeys = ALL_HEADERS
    } else {
      headerKeys = ['Content-Security-Policy']
    }

    if (options.reportOnly) {
      headerKeys = headerKeys.map(function (headerKey) {
        return headerKey + '-Report-Only'
      })
    }

    return function csp (req, res, next) {
      var directives = parseDynamicDirectives(originalDirectives, [req, res])
      var policyString = cspBuilder({ directives: directives })

      headerKeys.forEach(function (headerKey) {
        res.setHeader(headerKey, policyString)
      })
      next()
    }
  }
}
