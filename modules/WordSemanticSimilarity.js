/*! nodejs-text-summarizer v2.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')
var natural = require('natural')

/**
 * @param {}
 * @return {}
 * @api public
 */

var similarity = function (word1, word2) {
  if (_.isEmpty(word1) || _.isEmpty(word2))
    return 0
  return natural.DiceCoefficient(word1, word2)
}


var wssim = function (word, words) {
  if (_.isEmpty(words))
    return 0
  var max_similarity = _.chain(words)
    .map(function (w) { return similarity(word, w) })
    .max()
    .value()
  return max_similarity
}

var WordSemanticSimilarity = function (words1, words2) {

  var sum_wssim = _.chain(words1)
    .map(function (word1) { return wssim(word1, words2) })
    .reduce(function(total, n) { return total + n })
    .value()
  var sum_wssim2 = _.chain(words2)
    .map(function (word2) { return wssim(word2, words1) })
    .reduce(function(total, n) { return total + n })
    .value()
  
  sum_wssim = (sum_wssim) ? sum_wssim : 0
  sum_wssim2 = (sum_wssim2) ? sum_wssim2 : 0

  var result = (sum_wssim + sum_wssim2) / (words1.length + words2.length)
  result = ((words1.length + words2.length) == 0) ? 0 : result
  return result
}

/**
 * Module exports
 */
 module.exports = WordSemanticSimilarity;