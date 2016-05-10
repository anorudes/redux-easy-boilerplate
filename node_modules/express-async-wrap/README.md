# express-async-wrap
Allows the use of ES2016 async functions as Express route handlers.

## Install

```javascript
npm i express-async-wrap
```

## Usage

To use in place of a normal route handler:

```javascript
import wrap from 'express-async-wrap';

function makeResult(result) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 10);
  });
}

app.get('/', wrap(async function(req, res) {
  const results = [];

  for(let i = 0; i < 5; i++) {
    results.push(makeResult(`test${i}`));
  }

  res.send((await* results).join());
}));
```

To use as an error handler:

```javascript
import wrap from 'express-async-wrap';

app.get('/', wrap(async function(req, res, next) {
  next(new Error('error'));
}));
app.use(wrap(async function(err, req, res, next) {
  res.status(500).send('error');
}));
```
