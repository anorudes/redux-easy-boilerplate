HTTP Strict Transport Security middlware
========================================
[![Build Status](https://travis-ci.org/helmetjs/hsts.svg?branch=master)](https://travis-ci.org/helmetjs/hsts)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This middleware adds the `Strict-Transport-Security` header to the response. This tells browsers, "hey, only use HTTPS for the next period of time". ([See the spec](http://tools.ietf.org/html/draft-ietf-websec-strict-transport-sec-04) for more.)

This will set the Strict Transport Security header, telling browsers to visit by HTTPS for the next ninety days:

```javascript
var hsts = require('hsts')

var ninetyDaysInMilliseconds = 7776000000
app.use(hsts({ maxAge: ninetyDaysInMilliseconds }))
```

You can also include subdomains. If this is set on *example.com*, supported browsers will also use HTTPS on *my-subdomain.example.com*. Here's how you do that:

```javascript
app.use(hsts({
  maxAge: 123000,
  includeSubDomains: true
}))
```

Chrome lets you submit your site for baked-into-Chrome HSTS by adding `preload` to the header. You can add that with the following code, and then submit your site to the Chrome team at [hstspreload.appspot.com](https://hstspreload.appspot.com/).

```javascript
app.use(hsts({
  maxAge: 10886400000,     // Must be at least 18 weeks to be approved by Google
  includeSubDomains: true, // Must be enabled to be approved by Google
  preload: true
}))
```

This'll be set if `req.secure` is true, a boolean auto-populated by Express. If you're not using Express, that value won't necessarily be set, so you have two options:

```javascript
// Set the header based on conditions
app.use(hsts({
  maxAge: 1234000,
  setIf: function(req, res) {
    return Math.random() < 0.5;
  }
}))

// ALWAYS set the header
app.use(hsts({
  maxAge: 1234000,
  force: true
}))
```

Note that the max age is in milliseconds, even though the spec uses seconds. This will round to the nearest full second.

This only works if your site actually has HTTPS. It won't tell users on HTTP to *switch* to HTTPS, it will just tell HTTPS users to stick around. You can enforce this with the [express-enforces-ssl](https://github.com/aredo/express-enforces-ssl) module. This header is [somewhat well-supported by browsers](http://caniuse.com/#feat=stricttransportsecurity).
