var expect = require('chai').expect
var assert = require('assert')
var _ = require('lodash')
var index = require('../index.js')

describe('MAIN', function () {

  it('has ID', function () {
    assert(!_.isUndefined(index.ID), 'ID not found')
  })

})
