/*! nodejs-text-summarizer v2.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')

/**
 * @param {}
 * @return {}
 * @api public
 */
var WordFormSimilarity = function (words1, words2) {
  var same_words = _.intersection(words1, words2)
  var result = 2 * same_words.length/(words1.length + words2.length)
  result = (isNaN(result)) ? 0 : result
  return result
}

/**
 * Module exports
 */
module.exports = WordFormSimilarity;