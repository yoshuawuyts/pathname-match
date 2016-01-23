var test = require('tape')
var match = require('./')

test('it should catch input errors', function (t) {
  t.plan(1)
  t.throws(match, /string/)
})

test('it should query strings', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar?baz=ban'), '/foo/bar')
})

test('it strip url hashes', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar#baz-ban/baz'), '/foo/bar')
})

test('it strip url hashes and query strings', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar#baz-ban/baz?foo=bar'), '/foo/bar')
})

test('it should remove trailing slashes', function (t) {
  t.plan(1)
  t.equal(match('/foo/bar/'), '/foo/bar')
})

test('it should remove protocols', function (t) {
  t.plan(2)
  t.equal(match('http:///foo/bar/'), '/foo/bar')
  t.equal(match('https:///foo/bar/'), '/foo/bar')
})

test('it should remove hosts', function (t) {
  t.plan(1)
  t.equal(match('bar.com/foo/bar/'), '/foo/bar')
})

test('it should remove ips', function (t) {
  t.plan(1)
  t.equal(match('127.0.0.1/foo/bar/'), '/foo/bar')
})

test('it should remove ports', function (t) {
  t.plan(2)
  t.equal(match('127.0.0.1:1337/foo/bar/'), '/foo/bar')
  t.equal(match('127.0.0.1:422/foo/bar/'), '/foo/bar')
})

test('it should remove all the things, together', function (t) {
  t.plan(2)
  t.equal(match('http://127.0.0.1:1337/foo/bar/?bin=bar'), '/foo/bar')
  t.equal(match('https://foobar.com:1337/foo/#bar?bin=baz'), '/foo')
})
