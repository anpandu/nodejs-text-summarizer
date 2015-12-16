/*! nodejs-text-summarizer v1.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */

var _ = require('lodash')
var tokenizer = require('nalapa').tokenizer

var Cleaner = require('./modules/Cleaner.js')
var Processor = require('./modules/Processor.js')

/**
 * @param {}
 * @return {}
 * @api public
 */

var summarizer = function (content, opt) {

  var n = 1
  var lang = 'EN'
  var isRaw = false

  if (!_.isUndefined(opt)) {
    n = (_.isUndefined(opt.n)) ? n : opt.n
    lang = (_.isUndefined(opt.lang)) ? lang : opt.lang
    isRaw = (_.isUndefined(opt.raw)) ? raw : opt.raw
  }

  var text = content
  text = Cleaner.replaceNonASCII(text, ' ')
  text = Cleaner.fixDotBetweenSentences(text)
  var sentences = tokenizer.splitSentence(text)
  
  Processor.setLanguage(lang)

  sentences = Processor.addWords(sentences)
  sentences = Processor.addWordFormSimilarity(sentences)
  sentences = Processor.addWordSemanticSimilarity(sentences)
  sentences = Processor.addWordOrderSimilarity(sentences)
  sentences = Processor.addTotalScore(sentences)
  sentences = Processor.deleteWords(sentences)
  sentences = Processor.getNBest(n, sentences)

  if (isRaw)
    return sentences
  else {
    var summary = Processor.getJoinedSentences(sentences)
    return (sentences.length>0) ? summary : ''
  }
}


/**
 * Module exports
 */

module.exports = summarizer
