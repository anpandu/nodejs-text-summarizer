var expect = require('chai').expect
var sim2 = require('../../modules/WordSemanticSimilarity.js')

describe('WordSemanticSimilarity', function () {

    it('sim2', function () {
        var arr1 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var arr2 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var answer = 1
        var result = sim2(arr1, arr2)
        expect(result).to.equal(answer)
        
        var arr1 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var arr2 = ['haha', 'hihi', 'huhu']
        var answer = 0.75
        var result = sim2(arr1, arr2)
        expect(result).to.equal(answer)
    })
})
