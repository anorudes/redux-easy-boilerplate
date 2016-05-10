chai = require 'chai'
expect = chai.expect
sinon = require 'sinon'
Promise = require 'bluebird'
_ = require 'underscore'
Interfake = require('interfake')
interfake = new Interfake()

interfake.get('/good').body({message: 'ok'})
interfake.get('/bad').status(400).body({error: 'not ok'})
interfake.get('/not-found').status(404).body({error: 'not ok'})
interfake.listen(3000) # The server will listen on port 3000

request = require '../'


describe 'superagent-promise', ->
  it 'should exist', ->
    expect(request).to.exist

  it 'should resolve a res object when the returned statusCode is < 400', ->
    request.get("localhost:3000/good")
      .then (res) ->
        expect(res).to.exist
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('ok')

  it 'should reject an error object when the
      returned statusCode is > 400', (done) ->
    request.get("localhost:3000/bad")
      .then (res) ->
        expect(res).to.not.exist
      .catch (error) ->
        expect(error).to.exist
        expect(error.res).to.exist
        expect(error.status).to.exist
        expect(error.body).to.exist
        expect(error.res.body.error).to.equal('not ok')
        expect(error.body.error).to.equal('not ok')
        expect(error).to.be.instanceof(Error)
        expect(error.name).to.equal("SuperagentPromiseError")
        expect(error.message).to.equal("cannot GET localhost:3000/bad (400)")
        done()

  it 'should reject an error object when requesting
      non-existent page', (done) ->
    request.get("http://localhost:3000/not-found")
      .then (res) ->
        expect(res).to.not.exist
        done()
      .catch (error) ->
        expect(error).to.exist
        expect(error.res).to.exist
        expect(error.status).to.exist
        expect(error.body).to.exist
        expect(error).to.be.instanceof(Error)
        expect(error.name).to.equal("SuperagentPromiseError")
        expect(error.message)
          .to.equal("cannot GET http://localhost:3000/not-found (404)")
        done()

  it 'should reject an error object when there is an http error', ->
    request.get("localhost:23423")
      .then (res) ->
        expect(res).to.not.exist
      .catch (error) ->
        expect(error).to.exist
        expect(error).to.be.instanceof(Error)
        expect(error).to.be.instanceof(request.SuperagentPromiseError)
        expect(error.name).to.equal("SuperagentPromiseError")
        expect(error.originalError.code).to.equal("ECONNREFUSED")

  describe 'request.SuperagentPromiseError', ->
    SuperagentPromiseError = request.SuperagentPromiseError

    it 'should have a originalError property if a child error is provided', ->
      error = new SuperagentPromiseError('test', new Error('originalError'))
      expect(error).to.be.instanceof(Error)
      expect(error).to.be.instanceof(SuperagentPromiseError)
      expect(error.name).to.equal('SuperagentPromiseError')
      expect(error.originalError).to.exist
      expect(error.originalError).to.be.instanceof(Error)

    it 'should include the originalError stacktrace', ->
      originalError = new Error('abc')
      originalError.stack = '---originalErrorStack---'
      superagentError = new SuperagentPromiseError('def', originalError)
      expect(superagentError.stack).to.contain(
        '\nCaused by:  ---originalErrorStack---'
      )

  describe 'cancelling promises', ->

    beforeEach ->
      sinon.stub request.Request.prototype, 'abort'

    afterEach ->
      request.Request.prototype.abort.restore()

    describe 'cancel without reason', ->

      it 'should abort the request when the promise is cancelled', (done) ->
        request.get("localhost:3000/good")
          .then(null, ->)
          .cancel()

        setImmediate ->
          expect(request.Request.prototype.abort.called).to.be.true
          done()

    describe 'cancel with reason that subclasses CancellationError', ->

      class CustomCancellationError extends Promise.CancellationError

      it 'should abort the request when the promise is cancelled', (done) ->
        request.get("localhost:3000/good")
          .then(null, ->)
          .cancel new CustomCancellationError

        setImmediate ->
          expect(request.Request.prototype.abort.called).to.be.true
          done()      
