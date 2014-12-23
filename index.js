
var assert = require('assert')

module.exports = pathnameMatch

// Match only a pathname.
// @param {String} path
// @return {String} path
function pathnameMatch(path) {
  assert.equal(typeof path, 'string')
  var nw = path.split('#')[0]
  return nw.replace(/\/$/, '')
}
