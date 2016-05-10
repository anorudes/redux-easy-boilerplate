HTTP Public Key Pinning (HPKP) middleware
=========================================
[![Build Status](https://travis-ci.org/helmetjs/hpkp.svg?branch=master)](https://travis-ci.org/helmetjs/hpkp)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[_Looking for a changelog?_](https://github.com/helmetjs/helmet/blob/master/HISTORY.md)

Adds Public Key Pinning headers to Express/Connect applications. To learn more about HPKP, check out [the spec](https://tools.ietf.org/html/rfc7469), [the article on MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Public_Key_Pinning), and [this tutorial](https://timtaubert.de/blog/2014/10/http-public-key-pinning-explained/).

Usage:

```js
var express = require('express')
var hpkp = require('hpkp')

var app = express()

var ninetyDaysInMilliseconds = 7776000000
app.use(hpkp({
  maxAge: ninetyDaysInMilliseconds,
  sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  includeSubdomains: true,         // optional
  reportUri: 'http://example.com', // optional
  reportOnly: false,               // optional

  // Set the header based on a condition.
  // This is optional.
  setIf: function (req, res) {
    return req.secure
  }
}))
```

Setting `reportOnly` to `true` will change the header from `Public-Key-Pins` to `Public-Key-Pins-Report-Only`.
