/*! nodejs-text-summarizer v1.0.0 - MIT license */

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
  return natural.DiceCoefficient(word1, word2)
}


var wssim = function (word, words) {
  var max_similarity = _.chain(words)
    .map(function (w) { return similarity(word, w) })
    .max()
    .value()
  return max_similarity
}

var WordSemanticSimilarity = function (arr1, arr2) {
  var sum_wssim = _.chain(arr1)
    .map(function (word1) { return wssim(word1, arr2) })
    .reduce(function(total, n) { return total + n })
    .value()
  var sum_wssim2 = _.chain(arr2)
    .map(function (word2) { return wssim(word2, arr1) })
    .reduce(function(total, n) { return total + n })
    .value()
  var result = (sum_wssim + sum_wssim2) / (arr1.length + arr2.length)
  return result
}

/**
 * Module exports
 */
 module.exports = WordSemanticSimilarity;