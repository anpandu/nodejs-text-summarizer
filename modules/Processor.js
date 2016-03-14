/*! nodejs-text-summarizer v2.0.0 - MIT license */

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
var sim3 = require('./WordOrderSimilarity.js')

/**
 * @param {}
 * @return {}
 * @api public
 */
var Processor = function () {}

Processor.prototype.LANG = Helper.LANG.EN
Processor.prototype.lambda1 = 0.8
Processor.prototype.lambda2 = 0.1 
Processor.prototype.lambda3 = 0.1

Processor.prototype.setLanguage = function(lang) {
  Processor.prototype.LANG = lang
}

Processor.prototype.addWords = function(sentences) {
  var count = 0
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      var res = {}
      res['text'] = sentence
      res['s_id'] = count
      res['words'] = tokenizer.tokenize(sentence)
      res['words'] = _.chain(res['words'])
        .filter(function (word) { return !Helper.isStopWord(Processor.prototype.LANG, word)})
        .filter(function (word) { return !Helper.isPunctuation(word)})
        .map(function (word) { return s(word).toLowerCase().value() })
        .value()
      res['words'] = _.uniq(res['words'])
      count += 1
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

Processor.prototype.addWordOrderSimilarity = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      sentence['word_order_similarity'] = _.chain(sentences)
        .map(function (item) { return sim3(item['words'], sentence['words']) })
        .reduce(function(total, n) { return total + n })
        .value()
      return sentence
    })
    .value()
  return sentences
}

Processor.prototype.addTotalScore = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      var a = Processor.prototype.lambda1 * sentence['word_form_similarity']
      var b = Processor.prototype.lambda2 * sentence['word_semantic_similarity']
      var c = Processor.prototype.lambda3 * sentence['word_order_similarity']
      sentence['total_score'] = a + b + c
      return sentence
    })
    .value()
  return sentences
}

Processor.prototype.deleteWords = function(sentences) {
  var sentences = _.chain(sentences)
    .map(function (sentence) {
      delete sentence['words']
      return sentence 
    })
    .value()
  return sentences
}

Processor.prototype.getNBest = function(n, scored_sentences) {
  var ranked_sentences = _.chain(scored_sentences).sortBy(function(a) { return -1*a['total_score'] }).value()
  var best_sentences = _.slice(ranked_sentences, 0, n)
  return best_sentences
}

Processor.prototype.getJoinedSentences = function(best_sentences) {
  var text = _.chain(best_sentences)
    .sortBy(function(a) { return a['s_id'] })
    .map('text')
    .value()
    .join(' ')
  return text
}

/**
 * Module exports
 */
module.exports = Processor;