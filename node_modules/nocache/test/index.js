var nocache = require('..')

var assert = require('assert')
var connect = require('connect')
var request = require('supertest')

describe('nocache', function () {
  it('sets headers properly', function (done) {
    var app = connect()
    app.use(function (req, res, next) {
      res.setHeader('ETag', 'abc123')
      next()
    })
    app.use(nocache())
    app.use(function (req, res) {
      res.end('Hello world!')
    })

    request(app).get('/')
      .expect('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('Pragma', 'no-cache')
      .expect('Expires', '0')
      .expect('ETag', 'abc123')
      .end(done)
  })

  it('can be told to squash etags', function (done) {
    var app = connect()
    app.use(function (req, res, next) {
      res.setHeader('ETag', 'abc123')
      next()
    })
    app.use(nocache({ noEtag: true }))
    app.use(function (req, res) {
      res.end('Hello world!')
    })

    request(app).get('/')
      .expect('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('Pragma', 'no-cache')
      .expect('Expires', '0')
      .end(function (err, res) {
        if (err) {
          done(err)
          return
        }
        assert.equal(res.header.etag, undefined)
        done()
      })
  })

  it('names its function and middleware', function () {
    assert.equal(nocache.name, 'nocache')
    assert.equal(nocache().name, 'nocache')
  })
})
