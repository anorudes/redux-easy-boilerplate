module.exports = function nocache (options) {
  var noEtag = (options || {}).noEtag

  return function nocache (req, res, next) {
    res.setHeader('Surrogate-Control', 'no-store')
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    if (noEtag) {
      res.removeHeader('ETag')
    }
    next()
  }
}
