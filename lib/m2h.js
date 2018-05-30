'use strict';
// Copyright (c) 2018 Oleg Medvedev

const marked = require('marked'),
	  fs 	 = require('fs'),
	  path 	 = require('path'),
	  util   = require('util');

// This module funtions
const cat    = require('./lib/cat'),
 	  render = require('./lib/render'),
 	  read   = require('./lib/_read');

let Readable = require('stream').Readable;
util.inherits(Markdown, Readable);

function Markdown() {
  this.super_ = this.constructor.super_;
  this.super_.call(this);
  this.debug = false;
  this.bufmax = 1024;
  this.html = '';
  this.setEncoding('utf8');
}

Markdown.prototype.render = render;
Markdown.prototype.cat 	  = cat;
Markdown.prototype._read  = read;

module.exports = Markdown;

