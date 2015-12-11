var expect = require('chai').expect
var helper = require('../../modules/Helper.js')

describe('Helper', function () {

  it('isStopWord', function () {
    expect(helper.isStopWord('untuk')).to.equal(true)
    expect(helper.isStopWord('Untuk')).to.equal(true)
    expect(helper.isStopWord('asdasdasdasdasd')).to.equal(false)
  })

  it('isPunctuation', function () {
    expect(helper.isPunctuation('.')).to.equal(true)
    expect(helper.isPunctuation('"')).to.equal(true)
    expect(helper.isPunctuation('.,')).to.equal(true)
    expect(helper.isPunctuation('google.com')).to.equal(false)
    expect(helper.isPunctuation('gara-gara')).to.equal(false)
  })

})
