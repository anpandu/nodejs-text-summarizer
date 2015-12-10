var expect = require('chai').expect
var sim1 = require('../../modules/WordFormSimilarity.js')

describe('WordFormSimilarity', function () {

    it('sim1', function () {
        var arr1 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var arr2 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var answer = 1
        var result = sim1(arr1, arr2)
        expect(result).to.equal(answer)
        
        var arr1 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var arr2 = ['haha', 'hihi', 'huhu']
        var answer = 0.75
        var result = sim1(arr1, arr2)
        expect(result).to.equal(answer)

        var arr1 = ['haha', 'hihi', 'huhu', 'hehe', 'hoho']
        var arr2 = []
        var answer = 0
        var result = sim1(arr1, arr2)
        expect(result).to.equal(answer)
    })
})
