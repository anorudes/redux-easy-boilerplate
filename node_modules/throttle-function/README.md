# throttle-function [![Build Status](https://secure.travis-ci.org/brianloveswords/throttle-function.png?branch=master)](http://travis-ci.org/brianloveswords/throttle-function)

Takes a function, returns a function that will can only be called a certain amount of times per second.

## Install

```bash
$ npm install throttle-function
$ npm test throttle-function
```

## Usage

```js
const throttle = require('throttle-function')
const api = require('./api')

const getWhatever = throttle(api.getWhatever, {
  // call a maximum of 180 times per 15 minute window
  window: 15 * 60,
  limit: 180
})

// this will fire off every 5 seconds instead of immediately
getWhatever()
getWhatever()
getWhatever()
```

## License
MIT

```
Copyright (c) 2013 Brian J. Brennan

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
