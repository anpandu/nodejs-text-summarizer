var expect = require('chai').expect
var assert = require('assert')
var _ = require('lodash')
var index = require('../topic.js')

describe('MAIN', function () {

  it('has TopicID', function () {
    assert(!_.isUndefined(index.TopicID), 'TopicID not found')
  })

})
