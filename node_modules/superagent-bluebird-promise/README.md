[![Build Status](https://img.shields.io/travis/KyleAMathews/superagent-bluebird-promise/master.svg?style=flat-square)](http://travis-ci.org/KyleAMathews/superagent-bluebird-promise)

superagent-bluebird-promise
===========================

Add promise support to
[Superagent](http://visionmedia.github.io/superagent/) using
[Bluebird](https://github.com/petkaantonov/bluebird).

## Install
`npm install superagent-bluebird-promise`

## Usage
Simply require this package instead of `superagent`. Then you can call `.then()` instead of `.end()` to get a promise for your requests.

```javascript
var request = require('superagent-bluebird-promise');

request.get('/an-endpoint')
  .then(function(res) {
    console.log(res);
  }, function(error) {
    console.log(error);
  });
```

To generate a promise without registering any callbacks (e.g. when returning a promise from within a library), call `.promise()` instead.

```javascript
request.get('/an-endpoint').promise()
```

In order to use any of Bluebird's various promise methods, make sure you call `.then()` or `.promise()` first.

An error is thrown for all HTTP errors and responses that have a response code of 400 or above.

The `error` parameter always has a key `error` and for 4xx and 5xx responses, will also have a `status` and `res` key.

## Cancelling requests

You can [abort the request](http://visionmedia.github.io/superagent/#aborting-requests) by [cancelling the promise](https://github.com/petkaantonov/bluebird/blob/master/API.md#cancelerror-reason---promise):

```js
promise.cancel();
```

When aborting the request with a [custom reason](https://github.com/petkaantonov/bluebird/blob/master/API.md#cancelerror-reason---promise), make sure your error class inherits from Bluebird's [CancellationError class](https://github.com/petkaantonov/bluebird/blob/master/API.md#cancellationerror) or the request won't be aborted.

This is only possible because all promises are [cancellable](https://github.com/petkaantonov/bluebird/blob/master/API.md#cancellable---promise) by default. To disable this functionality, call Bluebird's [uncancellable](https://github.com/petkaantonov/bluebird/blob/master/API.md#uncancellable---promise) method on the promise:

```js
promise.uncancellable();
```
