var isString = require('lodash.isstring')

function isObject (value) {
  return !!value && typeof value === 'object'
}

module.exports = function frameguard (action, domain) {
  var directive

  // This converts String objects.
  if (isString(action)) {
    action = action.valueOf()
  }

  if (isObject(action)) {
    domain = action.domain
    action = action.action
  }

  if (action === undefined) {
    directive = 'SAMEORIGIN'
  } else if (isString(action)) {
    directive = action.toUpperCase()
  }

  if (directive === 'ALLOWFROM') {
    directive = 'ALLOW-FROM'
  } else if (directive === 'SAME-ORIGIN') {
    directive = 'SAMEORIGIN'
  }

  if (['DENY', 'ALLOW-FROM', 'SAMEORIGIN'].indexOf(directive) === -1) {
    throw new Error('X-Frame must be undefined, "DENY", "ALLOW-FROM", or "SAMEORIGIN"')
  }

  if (directive === 'ALLOW-FROM') {
    if (!isString(domain)) {
      throw new Error('X-Frame: ALLOW-FROM requires a second parameter')
    }
    directive = 'ALLOW-FROM ' + domain
  }

  return function frameguard (req, res, next) {
    res.setHeader('X-Frame-Options', directive)
    next()
  }
}
