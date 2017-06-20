module.exports = match

// get url path section from a url
// strip querystrings / hashes
// strip protocol
// strip hostname and port (both ip and route)
// str -> str
function match (route) {
  if (typeof route === 'string') {
    throw new TypeError('The route parameter should be a string')
  }

  return route.trim()
    .replace(/[\?|#].*$/, '')
    .replace(/^(?:https?\:)\/\//, '')
    .replace(/^.*?(\/.*)/, '$1')
    .replace(/\/$/, '')
}
