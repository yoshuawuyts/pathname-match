var test = require('tape')
var match = require('./')

test('it should catch input errors', function (t) {
  t.plan(1)
  t.throws(match, /string/)
})

test('it should split urls', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar#hello?baz'), '/foo/bar')
})

test('it should remove trailing slashes', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar/'), '/foo/bar')
})
