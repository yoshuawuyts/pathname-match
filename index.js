const assert = require('assert')
const url = require('url')

module.exports = match

// Match only a pathname.
// (str, str) -> str
function match (path) {
  assert.equal(typeof path, 'string')
  const nw = url.parse(path).pathname
  const trimmed = nw.replace(/\/$/, '')
  return trimmed
}
