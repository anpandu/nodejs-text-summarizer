/*! topic v0.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')
var tokenizer = require('nalapa').tokenizer
var nlpc = require('nalapa').cleaner
var s = require("underscore.string")

var Helper = require('./Helper.js')
var sim1 = require('./WordFormSimilarity.js')
var sim2 = require('./WordSemanticSimilarity.js')

/**
 * @param {}
 * @return {}
 * @api public
 */
var Processor = function () {}

Processor.prototype.addWords = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      var res = {}
      res['text'] = sentence
      res['words'] = tokenizer.tokenize(sentence)
      res['words'] = _.chain(res['words'])
        .filter(function (word) { return !Helper.isStopWord(word)})
        .filter(function (word) { return !Helper.isPunctuation(word)})
        .map(function (word) { return s(word).toLowerCase().value() })
        .value()
      res['words'] = _.uniq(res['words'])
      return res
    })
    .value()
  return sentences
}

Processor.prototype.addWordFormSimilarity = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      sentence['word_form_similarity'] = _.chain(sentences)
        .map(function (item) { return sim1(item['words'], sentence['words']) })
        .reduce(function(total, n) { return total + n })
        .value()
      return sentence
    })
    .value()

  return sentences
}

Processor.prototype.addWordSemanticSimilarity = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      sentence['word_semantic_similarity'] = _.chain(sentences)
        .map(function (item) { return sim2(item['words'], sentence['words']) })
        .reduce(function(total, n) { return total + n })
        .value()
      return sentence
    })
    .value()
  return sentences
}

/**
 * Module exports
 */
module.exports = new Processor ();