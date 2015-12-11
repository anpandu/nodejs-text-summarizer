/*! topic v0.0.0 - MIT license */

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

var sumID = function (content) {
  
  var text = content
  text = Cleaner.replaceNonASCII(text, ' ')
  text = Cleaner.fixDotBetweenSentences(text)

  var sentences = tokenizer.splitSentence(text)
  
  sentences = Processor.addWords(sentences)
  sentences = Processor.addWordFormSimilarity(sentences)
  sentences = Processor.addWordSemanticSimilarity(sentences)
  sentences = Processor.addWordOrderSimilarity(sentences)
  sentences = Processor.addTotalScore(sentences)
  sentences = Processor.deleteWords(sentences)

  sentences = _.chain(sentences).sortBy(function(a) { return a['total_score'] }).value()
  if (sentences.length>0)
    return sentences[sentences.length-1]['text']
  else
    return ''
}


/**
 * Module exports
 */

module.exports = {
  ID: sumID
}
