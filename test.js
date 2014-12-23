var test = require('tape')
var match = require('./')

test('it should catch input errors', function(t) {
  t.throws(match, /"undefined" == "string"/)
  t.end()
})

test('it should split urls', function(t) {
  t.equal(match('/foo/bar#hello?baz'), '/foo/bar')
  t.end()
})

test('it should remove trailing slashes', function(t) {
  t.equal(match('/foo/bar/'), '/foo/bar')
  t.end()
})
