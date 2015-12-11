var expect = require('chai').expect
var cleaner = require('../../modules/Cleaner.js')

describe('Cleaner', function () {

    it('replaceNonASCII', function () {
    	var text = '\u2013'
    	var answer = ' '
    	var result = cleaner.replaceNonASCII(text, ' ')
        expect(result).to.equal(answer)
    })

    it('fixDotBetweenSentences', function () {
    	var text = 'Maroef Sjamsoeddin.\"Nama kami disebut'
    	var answer = 'Maroef Sjamsoeddin. \"Nama kami disebut'
    	var result = cleaner.fixDotBetweenSentences(text, ' ')
        expect(result).to.equal(answer)

        var text = 'Maroef SjamsoeddiN.\"Nama kami disebut'
        var answer = 'Maroef SjamsoeddiN. \"Nama kami disebut'
        var result = cleaner.fixDotBetweenSentences(text, ' ')
        expect(result).to.equal(answer)

    	var text = 'kata Fahri.Menurut Fahri'
    	var answer = 'kata Fahri. Menurut Fahri'
    	var result = cleaner.fixDotBetweenSentences(text, ' ')
        expect(result).to.equal(answer)

    	var text = 'kompas.com KOMPAS.COM'
    	var answer = 'kompas.com KOMPAS.COM'
    	var result = cleaner.fixDotBetweenSentences(text, ' ')
        expect(result).to.equal(answer)
    })
})
