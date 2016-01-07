module.exports = {
  path: 'lazypage',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index'))
    })
  }
};