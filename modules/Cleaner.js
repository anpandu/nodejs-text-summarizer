/*! nodejs-text-summarizer v2.0.0 - MIT license */

'use strict';

/**
 * Module dependencies
 */


/**
 * @param {}
 * @return {}
 * @api public
 */
var Cleaner = function () {}

Cleaner.prototype.replaceNonASCII = function(text, word) {
  return text.replace(/[^\x00-\x7F]/g, word)
}

Cleaner.prototype.fixDotBetweenSentences = function(text) {
  return text
  	.replace(/([a-z0-9\"\)]\.)([A-Z\"])/g, "$1 $2")
  	.replace(/([A-Z]\.)\"/g, "$1 \"")
}

/**
 * Module exports
 */
module.exports = new Cleaner ();