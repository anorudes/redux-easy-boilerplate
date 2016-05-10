const throttle = require('..')
const test = require('tap').test

test('throttling', function (t) {
  var first, second, third

  const opts = { window: 1, limit: 3 }
  const getDate = throttle(function getDate(callback) {
    process.nextTick(function () { return callback(Date.now()) })
  }, opts)

  const ops = [
    getDate(function _init(date) {
      console.log('called init', date)
      proceed()
    }),
    getDate(function _first(date) {
      first = date;
      console.log('called first', first)
      proceed()
    }),
    getDate(function _second(date) {
      second = date;
      console.log('called second', second)
      proceed()
    }),
    getDate(function _third(date) {
      third = date;
      console.log('called third', third)
      proceed()
    }),
  ]

  var waiting = ops.length
  console.dir(ops)

  function proceed() {
    if (--waiting > 0) return

    const diff1 = second - first
    const diff2 = third - second

    t.notEqual(first, second, 'should not be the same')
    t.ok(diff1 >= 166, 'diff1 should be at least 166 ms')
    t.ok(diff2 >= 166, 'diff2 should be at least 166 ms')
    t.end()
  }
})
