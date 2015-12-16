/*! nodejs-text-summarizer v2.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')
var mathjs = require('mathjs')
var TfIdf = require('natural').TfIdf
var NGrams = require('natural').NGrams

/**
 * @param {}
 * @return {}
 * @api public
 */

var distance = function (vector) {
  var sum = _.chain(vector)
    .map(function (a) { return a*a })
    .reduce(function(total, n) { return total + n })
    .value()
  return mathjs.sqrt(sum)
}

var cos = function (v1, v2) {
  var dot = mathjs.dot(v1, v2)
  return (dot+0.01) / ((distance(v1)*distance(v2))+0.01)
}

var getBigram = function (words) {
  var result = NGrams
    .ngrams(words.join(' '), 4, '[start]', '[end]')
    .map(function (bigram_arr) { return bigram_arr.join(' ') })
  return result
}

var getTrigram = function (words) {
  var result = NGrams
    .ngrams(words.join(' '), 4, '[start]', '[end]')
    .map(function (bigram_arr) { return bigram_arr.join(' ') })
  return result
}

var getVA = function (words, join_words) {
  var tfidf = new TfIdf ()
  tfidf.addDocument(words.join(' '))
  var result = _.chain(join_words)
    .map(function (word) { return tfidf.tfidfs(word, function(i, measure) { return measure })[0] })
    .value()
  return result
}

var getVB = function (words, join_words) {
  var words_bigram = getBigram(words)
  var join_words_bigram = getBigram(join_words)
  var result = _.chain(join_words_bigram)
    .map(function (word) { return (_.includes(words_bigram, word)) ? 1 : 0})
    .value()
  return result
}

var getVC = function (words, join_words) {
  var words_trigram = getTrigram(words)
  var join_words_trigram = getTrigram(join_words)
  var result = _.chain(join_words_trigram)
    .map(function (word) { return (_.includes(words_trigram, word)) ? 1 : 0})
    .value()
  return result
}

var WordOrderSimilarity = function (words1, words2) {
  if (_.isEmpty(words1) || _.isEmpty(words2) || words2.length==1)
    return 0

  var c1 = 4/10
  var c2 = 3/10
  var c3 = 3/10

  words1 = (words1.length==0) ? [''] : words1
  words2 = (words2.length==0) ? [''] : words2

  var join_words = _.uniq(words1.concat(words2))
  var va1 = getVA(words1, join_words)
  var va2 = getVA(words2, join_words)
  var vb1 = getVB(words1, join_words)
  var vb2 = getVB(words2, join_words)
  var vc1 = getVC(words1, join_words)
  var vc2 = getVC(words2, join_words)

  var result = c1*cos(va1, va2) + c2*cos(vb1, vb2) + c3*cos(vc1, vc2)
  return result
}

/**
 * Module exports
 */
module.exports = WordOrderSimilarity;