var expect = require('chai').expect
var helper = require('../../modules/Helper.js')

describe('Helper', function () {

  it('isStopWord (EN)', function () {
    var language = helper.LANG.EN
    expect(helper.isStopWord(language, 'haven\'t')).to.equal(true)
    expect(helper.isStopWord(language, 'Haven\'t')).to.equal(true)
    expect(helper.isStopWord(language, 'asdasdasdasdasd')).to.equal(false)
  })

  it('isStopWord (ID)', function () {
    var language = helper.LANG.ID
    expect(helper.isStopWord(language, 'untuk')).to.equal(true)
    expect(helper.isStopWord(language, 'Untuk')).to.equal(true)
    expect(helper.isStopWord(language, 'asdasdasdasdasd')).to.equal(false)
  })

  it('isPunctuation', function () {
    expect(helper.isPunctuation('.')).to.equal(true)
    expect(helper.isPunctuation('"')).to.equal(true)
    expect(helper.isPunctuation('.,')).to.equal(true)
    expect(helper.isPunctuation('google.com')).to.equal(false)
    expect(helper.isPunctuation('gara-gara')).to.equal(false)
  })

})
